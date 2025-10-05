/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
} from '@mui/material';
import './index.css';
import { StartScreen } from './StartScreen.tsx';
import { DiagnosisScreen } from './DiagnosisScreen.tsx';
import { ResultScreen } from './ResultScreen.tsx';
import { QUESTIONS } from './app-data.ts';

// MUIのデフォルトテーマを作成
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

// アプリケーションの状態を定義
// 'start': スタート画面
// 'diagnosis': 診断画面
// 'result': 結果表示画面
type Screen = 'start' | 'diagnosis' | 'result';

/**
 * アプリケーションのメインコンポーネント
 * 画面遷移や状態の管理をここで行う
 */
function App() {
  // 現在表示している画面の状態を管理
  const [screen, setScreen] = React.useState<Screen>('start');

  // ユーザーの回答を管理（選択された性格タイプIDの配列）
  const [answers, setAnswers] = React.useState<string[]>([]);

  /**
   * 診断開始ボタンが押されたときの処理
   * 回答履歴をリセットし、診断画面に遷移する
   */
  const handleStart = () => {
    setAnswers([]); // 回答履歴をリセット
    setScreen('diagnosis'); // 診断画面へ遷移
  };

  /**
   * 診断が完了したときの処理
   * @param {string[]} finalAnswers - ユーザーの最終的な回答の配列
   */
  const handleComplete = (finalAnswers: string[]) => {
    setAnswers(finalAnswers); // 最終的な回答を保存
    setScreen('result'); // 結果表示画面へ遷移
  };

  /**
   * 「もう一度診断する」ボタンが押されたときの処理
   * 状態をリセットしてスタート画面に戻る
   */
  const handleRestart = () => {
    setAnswers([]);
    setScreen('start');
  };

  // 表示するコンテンツをscreenの状態に応じて切り替える
  const renderContent = () => {
    switch (screen) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      case 'diagnosis':
        return (
          <DiagnosisScreen questions={QUESTIONS} onComplete={handleComplete} />
        );
      case 'result':
        return <ResultScreen answers={answers} onRestart={handleRestart} />;
      default:
        // 不正な状態の場合はスタート画面に戻す
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        {renderContent()}
      </Box>
    </Container>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {/* CssBaselineはブラウザのデフォルトスタイルをリセットし、MUIのベーススタイルを適用します */}
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}