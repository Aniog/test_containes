// Resolve a real https URL for a data-strk-img-id slot by reading the
// build-time strk-img-config.json. This lets us bake the final image URL
// directly into the production bundle. The strk-img system is still
// wired up via the data-strk-img-id attribute on each <img>, so the
// runtime ImageHelper can still swap or re-resolve the image if needed.

import strkImgConfig from "@/strk-img-config.json";

const urlCache = new Map();

function findResultUrl(entry) {
  if (!entry) return null;
  const pickedId = entry.picked;
  const results = Array.isArray(entry.results) ? entry.results : [];
  if (pickedId) {
    const match = results.find((r) => r && r.id === pickedId);
    if (match && match.url) return match.url;
  }
  for (const r of results) {
    if (r && r.url) return r.url;
  }
  return null;
}

export function resolveImageUrl(imgId) {
  if (!imgId) return null;
  if (urlCache.has(imgId)) return urlCache.get(imgId);
  const entry = strkImgConfig[imgId];
  const url = findResultUrl(entry);
  urlCache.set(imgId, url);
  return url;
}

export function hasImage(imgId) {
  return Boolean(strkImgConfig[imgId]);
}
