import strkImgConfig from "@/strk-img-config.json"

// Resolve a data-strk-img-id to its pre-fetched CDN url at build time so the
// built markup never carries the empty SVG placeholder. Mirrors the runtime
// resolution in @strikingly/sdk's ImageHelper (picked result, else first).
export function resolveStockImageUrl(imgId) {
  if (!imgId) return null
  const entry = strkImgConfig?.[imgId]
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return null
  const picked = results.find((r) => String(r?.id) === String(entry.picked))
  return picked?.url || results[0]?.url || null
}
