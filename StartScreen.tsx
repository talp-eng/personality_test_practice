/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Typography, Button, Box } from '@mui/material';

/**
 * StartScreenコンポーネントのプロパティ（引数）の型定義
 * @interface StartScreenProps
 * @property {() => void} onStart - 「診断をはじめる」ボタンがクリックされたときに呼び出される関数
 */
interface StartScreenProps {
  onStart: () => void;
}

/**
 * スタート画面コンポーネント
 * @param {StartScreenProps} props - コンポーネントのプロパティ
 * @returns {JSX.Element} レンダリング結果
 */
export function StartScreen({ onStart }: StartScreenProps): JSX.Element {
  return (
    <Box textAlign="center">
      <Typography variant="h4" component="h1" gutterBottom>
        自分発見！５つの性格診断
      </Typography>
      <Typography variant="body1" paragraph>
        いくつかの簡単な質問に答えるだけで、あなたの隠れた性格タイプがわかります。
        新しい自分を見つける旅に出かけましょう！
      </Typography>
      <Button variant="contained" size="large" onClick={onStart}>
        診断をはじめる
      </Button>
    </Box>
  );
}