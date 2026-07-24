import strkImgConfig from '@/strk-img-config.json'

// Resolve the CDN URL the stock image system picked for a given data-strk id,
// so components can render a concrete `src` at build/runtime instead of a
// placeholder. Falls back to the first result if no explicit pick is stored.
export function strkSrc(id) {
  const entry = strkImgConfig?.[id]
  if (!entry) return ''
  const results = Array.isArray(entry.results) ? entry.results : []
  if (entry.picked) {
    const match = results.find((r) => r && typeof r.url === 'string' && r.url.includes(entry.picked))
    if (match) return match.url
  }
  const first = results.find((r) => r && typeof r.url === 'string')
  return first ? first.url : ''
}
