import strkImgConfig from "@/strk-img-config.json";

const resolvedUrlById = new Map();

for (const [id, entry] of Object.entries(strkImgConfig)) {
  const results = Array.isArray(entry?.results) ? entry.results : [];
  const pickedId = entry?.picked;
  const picked = results.find((r) => r?.id === pickedId) || results[0];
  const url = picked?.url;
  if (url) resolvedUrlById.set(id, url);
}

// Resolve the Strikingly stock URL for a data-strk-img-id at build time so the
// emitted bundle carries a real image URL in `src` instead of an SVG
// placeholder. The runtime ImageHelper still hydrates from data-strk-img-*.
export function strkSrc(strkImgId) {
  return resolvedUrlById.get(strkImgId) || "";
}
