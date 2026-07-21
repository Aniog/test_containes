import strkImgConfig from '@/strk-img-config.json'

// Resolve a strk-img ID to its configured CDN URL at runtime. Mirrors the
// build plugin's selection logic (picked result, else first result) and
// applies the same sizing params so <img> tags can render a real URL
// directly instead of a placeholder that gets swapped later.
export function resolveStrkImg(imgId, width = 800) {
  const entry = strkImgConfig?.[imgId]
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return ''
  let raw = null
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) raw = picked.url
  }
  if (!raw) raw = results[0]?.url || null
  if (!raw) return ''
  try {
    const url = new URL(raw)
    url.searchParams.set('w', String(Math.max(800, Math.round(width * 2))))
    url.searchParams.set('q', '90')
    url.searchParams.set('fit', 'max')
    url.searchParams.set('fm', 'jpg')
    return url.toString()
  } catch {
    return raw
  }
}
