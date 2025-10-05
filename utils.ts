/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * 回答の配列から最も多く出現する性格タイプIDを算出する。
 * 同数の場合は、IDのアルファベット順で最初のものを返す。
 * @param {string[]} answers - 回答の配列
 * @returns {string | null} 最も多い性格タイプID。回答がない場合はnull
 */
export function calculateResult(answers: string[]): string | null {
  if (answers.length === 0) {
    return null;
  }

  // 各性格タイプIDの出現回数をカウントする
  const counts = answers.reduce((acc, typeId) => {
    acc[typeId] = (acc[typeId] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // 最も出現回数が多いIDを見つける
  // 決定論的な結果（同点の場合の勝者）を保証するために、キーをソートしてから処理する
  const sortedTypeIds = Object.keys(counts).sort();

  let maxCount = 0;
  let resultTypeId: string | null = null;

  for (const typeId of sortedTypeIds) {
    if (counts[typeId] > maxCount) {
      maxCount = counts[typeId];
      resultTypeId = typeId;
    }
  }

  // もしすべてのカウントが同じでmaxCountが更新されなかった場合（例：['a', 'b', 'c']）、
  // ソートされた最初のIDを結果とする
  if (resultTypeId === null && sortedTypeIds.length > 0) {
    // すべての回答がユニークな場合、最初の回答タイプを返す
    const allUnique = sortedTypeIds.every(id => counts[id] === 1);
    if(allUnique) {
        // アルファベット順で最初のタイプを返す
        return sortedTypeIds[0];
    }
  }


  return resultTypeId;
}
