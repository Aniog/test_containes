import strkImgConfig from "@/strk-img-config.json";

function pickFirstUrl(entry) {
  if (!entry || !Array.isArray(entry.results) || entry.results.length === 0) return null;
  const picked = entry.picked
    ? entry.results.find((r) => String(r.id) === String(entry.picked))
    : null;
  return (picked || entry.results[0])?.url || null;
}

export function getStrkImageUrl(id) {
  if (!id) return null;
  return pickFirstUrl(strkImgConfig[id]);
}
