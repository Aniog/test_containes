import strkImgConfig from '@/strk-img-config.json'

// Resolves the picked image URL for a given strk-img-id from the build-time config.
// Returns null if the id is not found.
export function resolveStrkImageUrl(imgId) {
  if (!imgId) return null
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const pickedId = entry.picked
  const result = (entry.results || []).find((r) => r.id === pickedId)
  return result?.url || entry.results?.[0]?.url || null
}
