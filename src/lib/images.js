import strkImgConfig from "@/strk-img-config.json";

/**
 * Return the configured Strikingly image URL for a given slot id.
 * Falls back to a transparent 1x1 SVG if the slot is missing.
 */
export function getStrkImageUrl(imgId, fallback = null) {
  const entry = strkImgConfig[imgId];
  const results = entry?.results;
  if (!Array.isArray(results) || results.length === 0) {
    return fallback;
  }
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked));
    if (picked?.url) return picked.url;
  }
  return results[0]?.url || fallback;
}
