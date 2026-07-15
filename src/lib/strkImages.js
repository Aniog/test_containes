import strkImgConfig from "@/strk-img-config.json"

/**
 * Resolves a strk image ID to its picked stock-image URL from the
 * build-time generated config. Used for components where the imgId
 * is only known at runtime (e.g. cart items) and therefore cannot
 * be statically analyzed by the strk-img plugin.
 *
 * Returns null if the imgId is not found or has no picked result.
 */
export function resolveStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const pickedId = entry.picked
  if (!pickedId || !Array.isArray(entry.results)) return null
  const picked = entry.results.find((r) => r.id === pickedId)
  return picked ? picked.url : null
}
