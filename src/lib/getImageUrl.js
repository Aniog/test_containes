import strkImgConfig from '@/strk-img-config.json';

export function getImageUrl(imgId) {
  const entry = strkImgConfig[imgId];
  if (!entry) return '';
  if (entry.picked) {
    const picked = entry.results?.find(r => String(r.id) === String(entry.picked));
    if (picked?.url) return picked.url;
  }
  return entry.results?.[0]?.url || '';
}
