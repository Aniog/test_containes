const MONTHS_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

const pad = (n) => String(n).padStart(2, '0')

const isValidIsoDate = (value) => {
  if (typeof value !== 'string') return false
  if (!/^\d{4}-\d{2}-\d{2}/.test(value)) return false
  const d = new Date(value)
  return !Number.isNaN(d.getTime())
}

export const parseISO = (value) => {
  if (!isValidIsoDate(value)) return null
  return new Date(value)
}

export const format = (dateLike, pattern = 'MMM d, yyyy') => {
  const date = dateLike instanceof Date ? dateLike : parseISO(dateLike)
  if (!date || Number.isNaN(date.getTime())) return ''
  const month = date.getUTCMonth()
  const day = date.getUTCDate()
  const year = date.getUTCFullYear()
  return pattern
    .replace('yyyy', String(year))
    .replace('MMM', MONTHS_SHORT[month])
    .replace('MM', pad(month + 1))
    .replace('dd', pad(day))
    .replace('d', String(day))
}

export const formatDate = (value) => format(value, 'MMM d, yyyy')

export const readingTime = (text) => {
  if (typeof text !== 'string' || !text.trim()) return '1 min read'
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.round(words / 220))
  return `${minutes} min read`
}
