import strkImgConfig from '@/strk-img-config.json'

const FALLBACK_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%23e8ddd1'/%3E%3C/svg%3E"

export function getStrkImageUrl(slotId) {
  if (!slotId) return FALLBACK_IMAGE

  const entry = strkImgConfig?.[slotId]
  if (!entry) return FALLBACK_IMAGE

  const pickedResult = entry.results?.find((result) => result.id === entry.picked)
  return pickedResult?.url || entry.results?.[0]?.url || FALLBACK_IMAGE
}
