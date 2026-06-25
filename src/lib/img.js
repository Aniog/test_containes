import strkImgConfig from '@/strk-img-config.json'

export function getPickedImage(configKey) {
  const entry = strkImgConfig[configKey]
  if (!entry || !entry.results?.length) return null
  if (entry.picked) {
    const picked = entry.results.find((r) => String(r.id) === String(entry.picked))
    if (picked) return picked
  }
  return entry.results[0]
}

export function getPickedImageUrl(configKey) {
  const img = getPickedImage(configKey)
  return img?.url || null
}