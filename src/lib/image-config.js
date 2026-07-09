import strkImgConfig from '@/strk-img-config.json'

export function getConfiguredImageUrl(imageId) {
  const entry = strkImgConfig?.[imageId]
  if (!entry) return ''
  const picked = entry.results?.find((result) => result.id === entry.picked)
  return picked?.url || entry.results?.[0]?.url || ''
}
