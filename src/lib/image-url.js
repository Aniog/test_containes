import strkImgConfig from '../strk-img-config.json'

export function getStrkImageUrl(imageId, fallbackId = '') {
  const entry = strkImgConfig?.[imageId] || strkImgConfig?.[fallbackId]
  if (!entry) return ''
  const pickedResult = entry.results?.find((item) => item.id === entry.picked)
  return pickedResult?.url || entry.results?.[0]?.url || ''
}
