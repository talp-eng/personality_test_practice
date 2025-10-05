/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
import { PERSONALITY_TYPES } from './app-data.ts';
import type { PersonalityType } from './app-types.ts';
import { calculateResult } from './utils.ts';

/**
 * ResultScreenコンポーネントのプロパティ（引数）の型定義
 * @interface ResultScreenProps
 * @property {string[]} answers - ユーザーの回答（性格タイプID）の配列
 * @property {() => void} onRestart - 「もう一度診断する」ボタンがクリックされたときに呼び出される関数
 */
interface ResultScreenProps {
  answers: string[];
  onRestart: () => void;
}

/**
 * 結果表示画面コンポーネント
 * @param {ResultScreenProps} props - コンポーネントのプロパティ
 * @returns {JSX.Element} レンダリング結果
 */
export function ResultScreen({
  answers,
  onRestart,
}: ResultScreenProps): JSX.Element {
  // 診断ロジックを実行して結果を算出
  const resultTypeId = calculateResult(answers);
  const result: PersonalityType | undefined = PERSONALITY_TYPES.find(
    (p) => p.id === resultTypeId
  );

  // 結果が見つからない場合の表示
  if (!result) {
    return (
      <Box textAlign="center">
        <Typography variant="h5" gutterBottom>
          診断結果の取得に失敗しました
        </Typography>
        <Typography paragraph>
          有効な回答がありませんでした。もう一度最初からお試しください。
        </Typography>
        <Button variant="contained" size="large" onClick={onRestart}>
          はじめからやり直す
        </Button>
      </Box>
    );
  }

  return (
    <Box textAlign="center">
      <Typography variant="body1" color="text.secondary">
        あなたの性格タイプは...
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        {result.name}
      </Typography>
      <Paper variant="outlined" sx={{ p: 3, my: 3, textAlign: 'left' }}>
        <Typography variant="body1">{result.description}</Typography>
      </Paper>
      <Button variant="contained" size="large" onClick={onRestart}>
        もう一度診断する
      </Button>
    </Box>
  );
}
