import strkImgConfig from '@/strk-img-config.json'

const transparentPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

export function getStockImageSource(imageId, fallback = transparentPixel) {
  const entry = strkImgConfig?.[imageId]
  const results = entry?.results ?? []
  const picked = entry?.picked
  const selected = picked ? results.find((item) => String(item.id) === String(picked)) : results[0]
  return selected?.url || fallback
}
