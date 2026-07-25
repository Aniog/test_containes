import strkImgConfig from '@/strk-img-config.json'

export function getStrkImageUrl(imageId) {
  const entry = strkImgConfig?.[imageId]
  const picked = entry?.picked
  const results = Array.isArray(entry?.results) ? entry.results : []
  const selected = picked ? results.find((result) => result.id === picked) : results[0]

  return selected?.url || results[0]?.url || ''
}

export function getStrkBackgroundStyle(imageId) {
  const imageUrl = getStrkImageUrl(imageId)

  return imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined
}
