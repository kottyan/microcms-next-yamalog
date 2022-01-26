import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

/**
 * クエリパラメータを文字列として取得する
 * @param {string|string[]} クエリパラメータ
 * @return {string|undefined}
 */
export function queryToString (value: string | string[]): string | undefined {
  return Array.isArray(value) ? value[0] || undefined : value
}


/**
 * クエリパラメータを文字列として取得する
 * @param {Date} 日付データ（ISO 8601形式のUTC）
 * @return {string} YYYY/MM/DD形式の日本日付
 */
export function getFormattedJpTime (value: Date): string {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  return dayjs.utc(value).tz('Asia/Tokyo').format('YYYY/MM/DD')
}
