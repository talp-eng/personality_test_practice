/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PersonalityType, Question } from './app-types';

/**
 * 5種類の性格タイプデータ
 * descriptionには診断結果として表示する詳細な説明文が入ります。
 */
export const PERSONALITY_TYPES: PersonalityType[] = [
  {
    id: 'innovator',
    name: '革新の開拓者',
    description:
      'あなたは常に新しいアイデアを求め、常識にとらわれない発想で未来を切り開くタイプ。知的好奇心が旺盛で、複雑な問題を解決することに喜びを感じます。',
  },
  {
    id: 'guardian',
    name: '慈愛の守護者',
    description:
      'あなたは共感力が高く、周りの人々を支え、調和を大切にするタイプ。誠実で責任感が強く、人々が安心して過ごせる環境を作ることに貢献します。',
  },
  {
    id: 'explorer',
    name: '情熱の冒険家',
    description:
      'あなたはエネルギッシュで、未知の体験や挑戦に心を躍らせるタイプ。行動力があり、その場のひらめきを大切にしながら、人生を謳歌します。',
  },
  {
    id: 'analyst',
    name: '冷静な分析家',
    description:
      'あなたは論理的思考に優れ、物事の本質を見抜く力を持つタイプ。計画性があり、感情に流されず、客観的な事実に基づいて最適な判断を下します。',
  },
  {
    id: 'artist',
    name: '自由な表現者',
    description:
      'あなたは豊かな感性と独自の美学を持ち、自己表現を通じて世界に彩りを与えるタイプ。既成概念にとらわれず、自由な発想で創造的な活動を楽しみます。',
  },
];

/**
 * ユーザーに出題される質問データ
 */
export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '新しいプロジェクトに取り組むとき、あなたのスタイルは？',
    choices: [
      { id: 101, text: '誰も思いつかなかった斬新な計画を立てる', targetTypeId: 'innovator' },
      { id: 102, text: 'チーム全員の意見を聞き、円滑に進める', targetTypeId: 'guardian' },
      { id: 103, text: 'まずは行動！試しながら最適な方法を探す', targetTypeId: 'explorer' },
      { id: 104, text: '徹底的に情報を集め、リスクを分析する', targetTypeId: 'analyst' },
    ],
  },
  {
    id: 2,
    text: '週末を過ごすなら、どちらを選ぶ？',
    choices: [
      { id: 201, text: '美術館やコンサートで感性を刺激する', targetTypeId: 'artist' },
      { id: 202, text: '気の合う仲間とボランティア活動に参加する', targetTypeId: 'guardian' },
      { id: 203, text: '話題のスポットやイベントに足を運ぶ', targetTypeId: 'explorer' },
      { id: 204, text: '家でじっくりと読書や研究に没頭する', targetTypeId: 'analyst' },
    ],
  },
  {
    id: 3,
    text: '友人から悩みを相談されたら、どうする？',
    choices: [
      { id: 301, text: 'まずは共感し、相手の気持ちが落ち着くまで寄り添う', targetTypeId: 'guardian' },
      { id: 302, text: '気分転換になるような楽しい場所に連れ出す', targetTypeId: 'explorer' },
      { id: 303, text: '問題の根本原因を特定し、具体的な解決策を提案する', targetTypeId: 'analyst' },
      { id: 304, text: 'これまでにないユニークな視点からアドバイスする', targetTypeId: 'innovator' },
    ],
  },
  {
    id: 4,
    text: 'あなたの部屋を表現するなら、どんな言葉が近い？',
    choices: [
      { id: 401, text: '機能的に整理され、無駄なものがない空間', targetTypeId: 'analyst' },
      { id: 402, text: '自分の好きなものや作品で飾られた個性的な空間', targetTypeId: 'artist' },
      { id: 403, text: 'いつでも友人を迎えられる、温かく居心地の良い空間', targetTypeId: 'guardian' },
      { id: 404, text: '最新のガジェットや未完成の実験道具が置かれた空間', targetTypeId: 'innovator' },
    ],
  },
  {
    id: 5,
    text: '困難な壁にぶつかったとき、最初に何を思う？',
    choices: [
      { id: 501, text: '「どうすれば乗り越えられるか？」と解決策を探す', targetTypeId: 'analyst' },
      { id: 502, text: '「これも成長のチャンス！」とポジティブに捉える', targetTypeId: 'explorer' },
      { id: 503, text: '「新しいアプローチを試す時が来た」とワクワクする', targetTypeId: 'innovator' },
      { id: 504, text: '「自分らしい表現でこの状況を乗り切れないか」と考える', targetTypeId: 'artist' },
    ],
  },
];
