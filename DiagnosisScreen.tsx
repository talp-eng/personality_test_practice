/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Typography,
  Button,
  Box,
  LinearProgress,
  Stack,
} from '@mui/material';
import type { Question } from './app-types';

/**
 * DiagnosisScreenコンポーネントのプロパティ（引数）の型定義
 * @interface DiagnosisScreenProps
 * @property {Question[]} questions - 表示する質問の配列
 * @property {(answers: string[]) => void} onComplete - 診断が完了したときに呼び出される関数
 */
interface DiagnosisScreenProps {
  questions: Question[];
  onComplete: (answers: string[]) => void;
}

/**
 * 診断画面コンポーネント
 * @param {DiagnosisScreenProps} props - コンポーネントのプロパティ
 * @returns {JSX.Element} レンダリング結果
 */
export function DiagnosisScreen({
  questions,
  onComplete,
}: DiagnosisScreenProps): JSX.Element {
  // 現在表示している質問のインデックス（0から始まる）
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  // ユーザーの回答を格納する配列
  const [answers, setAnswers] = React.useState<string[]>([]);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  // 進捗率を計算 (0-100)
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  /**
   * 回答選択肢がクリックされたときの処理
   * @param {string} targetTypeId - 選択された回答に対応する性格タイプID
   */
  const handleAnswer = (targetTypeId: string) => {
    const newAnswers = [...answers, targetTypeId];
    setAnswers(newAnswers);

    // 次の質問があるかチェック
    if (currentQuestionIndex < totalQuestions - 1) {
      // 次の質問へ進む
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 最後の質問だったので、完了処理を呼び出す
      onComplete(newAnswers);
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" align="center" gutterBottom>
          質問 {currentQuestionIndex + 1} / {totalQuestions}
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
      </Box>

      <Typography variant="h5" component="p" align="center" sx={{ my: 4 }}>
        {currentQuestion.text}
      </Typography>

      <Stack spacing={2}>
        {currentQuestion.choices.map((choice) => (
          <Button
            key={choice.id}
            variant="outlined"
            size="large"
            onClick={() => handleAnswer(choice.targetTypeId)}
            sx={{ textTransform: 'none', py: 1.5 }} // ボタンのテキストを大文字にしない
          >
            {choice.text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}