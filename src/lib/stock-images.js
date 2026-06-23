import strkImgConfig from '@/strk-img-config.json'

export const IMAGE_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const resolveStockImageUrl = (configKey) => {
  if (!configKey) return ''

  const entry = strkImgConfig?.[configKey]
  if (!entry || !Array.isArray(entry.results) || entry.results.length === 0) {
    return ''
  }

  const pickedResult = entry.results.find((result) => result.id === entry.picked)
  return pickedResult?.url || entry.results[0]?.url || ''
}
