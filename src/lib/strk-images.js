import strkImgConfig from '../strk-img-config.json?hero-gold-v2'

export function getStrkImageUrl(imageId) {
  const entry = strkImgConfig[imageId]
  if (!entry?.results?.length) return ''

  const picked = entry.results.find((result) => String(result.id) === String(entry.picked)) || entry.results[0]
  return picked?.url || ''
}
