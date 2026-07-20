import strkImgConfig from "@/strk-img-config.json"

/**
 * Resolve the first resolved image URL for a given strk-img-id from the
 * build-time config. Returns null if the id is not present or has no results.
 *
 * This is useful for components whose image queries are fully dynamic at
 * runtime (e.g. cart line items whose data comes from localStorage) and
 * therefore cannot be resolved by the build-time strk-img plugin. By reusing
 * an id that was already resolved elsewhere (e.g. `${imageId}-card`), we can
 * pull the same stock image without a second runtime scan.
 */
export function resolveStrkImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry || !Array.isArray(entry.results) || entry.results.length === 0) {
    return null
  }
  return entry.results[0].url
}
