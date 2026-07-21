import strkImgConfig from "@/strk-img-config.json"

/**
 * Build a sharp-optimized image URL from a raw strikingly CDN url.
 * Mirrors the plugin's buildSharpUrl transform (w, q, fit, fm params).
 */
function buildSharpUrl(rawUrl, targetWidth, dpr = 2) {
  if (!rawUrl) return rawUrl
  let url
  try {
    url = new URL(rawUrl)
  } catch {
    return rawUrl
  }
  const width = Math.max(800, Math.round((Number(targetWidth) || 1600) * dpr))
  url.searchParams.set("w", String(width))
  url.searchParams.set("q", "90")
  url.searchParams.set("fit", "max")
  url.searchParams.set("fm", "jpg")
  return url.toString()
}

function pickedUrlFor(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const results = entry.results
  if (!Array.isArray(results) || results.length === 0) return null
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || null
}

/**
 * Resolve a configured image id to a sharp-optimized src URL.
 * Returns null if the id is not in the config (so callers can fall back).
 */
export function strkImgSrc(imgId, targetWidth = 800) {
  const raw = pickedUrlFor(imgId)
  if (!raw) return null
  return buildSharpUrl(raw, targetWidth)
}

/**
 * Resolve a configured background image id to a CSS style object.
 */
export function strkBgStyle(imgId) {
  const entry = strkImgConfig[imgId]
  const raw = pickedUrlFor(imgId)
  if (!raw) return {}
  const url = buildSharpUrl(raw, entry?.width || 1600, 2)
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
}
