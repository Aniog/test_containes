import strkImgConfig from "@/strk-img-config.json"

// Cache of imgId -> first result URL, built once from the pre-populated config.
const urlCache = new Map()

function buildCache() {
  if (urlCache.size > 0) return
  const entries = Object.entries(strkImgConfig)
  for (const [id, entry] of entries) {
    const first = entry?.results?.[0]?.url
    if (first) urlCache.set(id, first)
  }
}

// Returns a real image URL for a given data-strk-img-id, or "" if not found.
export function getImgUrl(imgId) {
  buildCache()
  return urlCache.get(imgId) || ""
}
