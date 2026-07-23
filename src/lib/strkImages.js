import config from "@/strk-img-config.json";

// Lightweight id -> resolved stock image URL lookup, built once from the
// build-time-resolved strk-img config. Used for dynamic thumbnails (cart,
// search) that can't rely on the runtime ImageHelper scan.
const urlById = (() => {
  const map = {};
  for (const [key, entry] of Object.entries(config)) {
    if (!entry || !Array.isArray(entry.results)) continue;
    const match = entry.results.find((r) => r.id === entry.picked) || entry.results[0];
    if (match && match.url) map[key] = match.url;
  }
  return map;
})();

export function getProductImageUrl(productId) {
  return urlById[`card-${productId}`] || null;
}

// Generic id -> resolved stock image URL lookup for any data-strk-img-id.
// Seeds the <img> src at build/first-render time so the markup never carries
// the empty-SVG placeholder; ImageHelper.loadImages still refines it at runtime.
export function getImageUrl(imgId) {
  return urlById[imgId] || null;
}
