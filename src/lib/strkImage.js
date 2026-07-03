import strkImgConfig from "@/strk-img-config.json";

// Resolve the first available image URL for a given strk-img-id from the
// pre-resolved config. Returns "" when the id is unknown.
export function resolveStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (!entry) return "";
  const first = Array.isArray(entry.results) ? entry.results[0] : null;
  return first?.url || "";
}
