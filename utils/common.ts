
/**
 * クエリパラメータを文字列として取得する
 * @param {string|string[]} クエリパラメータ
 * @return {string|undefined}
 */
export function queryToString (value: string | string[]): string | undefined {
  return Array.isArray(value) ? value[0] || undefined : value
}
