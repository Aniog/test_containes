import strkImgConfig from "@/strk-img-config.json";

function selectedUrl(entry) {
  if (!entry || !Array.isArray(entry.results) || entry.results.length === 0) {
    return "";
  }
  if (entry.picked) {
    const picked = entry.results.find(
      (r) => String(r.id) === String(entry.picked)
    );
    if (picked?.url) return picked.url;
  }
  return entry.results[0]?.url || "";
}

export function getStrkImageUrl(imgId) {
  return selectedUrl(strkImgConfig[imgId]);
}
