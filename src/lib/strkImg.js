import strkImgConfig from '@/strk-img-config.json'

export function strkImgUrl(imgId) {
  if (!imgId) return ''
  const entry = strkImgConfig[imgId]
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return ''
  if (entry?.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || ''
}
