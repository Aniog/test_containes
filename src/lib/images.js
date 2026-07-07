import strkImgConfig from '@/strk-img-config.json';

const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function getPickedImageUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (!entry || !Array.isArray(entry.results)) return null;
  const pickedId = entry.picked;
  if (pickedId) {
    const picked = entry.results.find((r) => r.id === pickedId);
    if (picked) return picked.url;
  }
  return entry.results[0]?.url || null;
}

export function getImageSrc(imgId) {
  return getPickedImageUrl(imgId) || placeholder;
}
