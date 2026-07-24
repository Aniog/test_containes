import strkImgConfig from '@/strk-img-config.json'

const SVG_NS = 'http://www.w3.org/2000/svg'
export const STRK_PLACEHOLDER =
  'data:image/svg+xml,' +
  encodeURIComponent(`<svg xmlns='${SVG_NS}' viewBox='0 0 1 1'>` + '</svg>')

function pickResult(entry) {
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return null
  if (entry.picked) {
    const match = results.find((r) => String(r.id) === String(entry.picked))
    if (match) return match
  }
  return results[0]
}

export function getStrkImgUrl(id) {
  if (!id) return STRK_PLACEHOLDER
  return pickResult(strkImgConfig[id])?.url || STRK_PLACEHOLDER
}
