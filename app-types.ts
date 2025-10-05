/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * 性格タイプ
 * @interface PersonalityType
 * @property {string} id - 性格タイプを識別するための一意のID
 * @property {string} name - 性格タイプのキャッチーな名前
 * @property {string} description - 性格タイプの特徴を説明する文章
 */
export interface PersonalityType {
  id: string;
  name: string;
  description: string;
}

/**
 * 選択肢
 * @interface Choice
 * @property {number} id - 選択肢を識別するための一意のID
 * @property {string} text - 選択肢の文章
 * @property {string} targetTypeId - この選択肢がどの性格タイプに対応するかを示すID
 */
export interface Choice {
  id: number;
  text: string;
  targetTypeId: string;
}

/**
 * 質問
 * @interface Question
 * @property {number} id - 質問を識別するための一意のID
 * @property {string} text - ユーザーに表示される質問の文章
 * @property {Choice[]} choices - その質問に属する選択肢の配列
 */
export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}
