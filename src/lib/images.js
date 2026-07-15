import strkImgConfig from "@/strk-img-config.json"

/**
 * Look up the resolved stock image URL for a given image id (imgId).
 * Returns the resolved URL from the build-time config, or null if not found.
 */
export function getImageUrl(imgId) {
  if (!imgId) return null
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  // Prefer explicit picked url, then first result url.
  // Note: `picked` is sometimes just the photo id, so fall back to results[0].url.
  if (entry.picked && entry.picked.startsWith("http")) return entry.picked
  if (entry.results && entry.results.length > 0) {
    if (entry.picked) {
      const match = entry.results.find((r) => r.id === entry.picked || r.url?.endsWith(entry.picked))
      if (match) return match.url
    }
    return entry.results[0].url
  }
  return null
}

/**
 * Look up all available image URLs for a given image id (imgId).
 * Returns an array of URLs.
 */
export function getImageUrls(imgId) {
  if (!imgId) return []
  const entry = strkImgConfig[imgId]
  if (!entry) return []
  if (entry.results && entry.results.length > 0) {
    return entry.results.map((r) => r.url)
  }
  return []
}
