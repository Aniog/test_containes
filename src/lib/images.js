import imageConfig from '@/strk-img-config.json'

export function getImageUrl(id, index = 0) {
  const entry = imageConfig[id]
  if (!entry?.results?.length) return ''
  return entry.results[Math.min(index, entry.results.length - 1)].url
}

export function getBackgroundImageUrl(id) {
  return getImageUrl(id)
}
