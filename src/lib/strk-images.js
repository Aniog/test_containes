import strkImgConfig from "@/strk-img-config.json"

/**
 * Resolve a strk image ID to its final CDN URL from the build-time config.
 * Used for components whose image IDs can't be statically traced by the
 * build plugin (e.g. cart items from context, product from URL param).
 */
export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const picked = entry.picked
  if (!picked) return null
  const result = (entry.results || []).find((r) => r.id === picked)
  return result?.url || null
}
