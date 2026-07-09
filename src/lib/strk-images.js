import strkImgConfig from "@/strk-img-config.json"

// Mirrors the plugin's selectedConfigImageUrl: picks the result whose id
// matches entry.picked, falling back to results[0].
function selectedUrl(entry) {
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return null
  if (entry?.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || null
}

// Returns the resolved image URL for a given strk-img-id, or null if unknown.
export function strkImgUrl(imgId) {
  if (!imgId) return null
  return selectedUrl(strkImgConfig[imgId])
}

// Returns the resolved background image URL for a given strk-bg-id, or null.
export function strkBgUrl(bgId) {
  if (!bgId) return null
  return selectedUrl(strkImgConfig[bgId])
}
