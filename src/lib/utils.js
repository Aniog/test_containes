import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import strkImgConfig from "@/strk-img-config.json";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value) {
  const n = Number(value) || 0;
  return `$${n.toFixed(0)}`;
}

// Resolve a Strikingly image id to its built CDN url. Used for runtime-only
// contexts (e.g. cart drawer thumbnails) where the build plugin cannot
// statically resolve a data-strk-img-id, so we avoid leaving a placeholder
// in the production bundle.
export function getStrkImageUrl(imgId) {
  if (!imgId) return "";
  const entry = strkImgConfig[imgId];
  const results = entry?.results;
  if (Array.isArray(results) && results.length > 0) {
    return results[0]?.url || results[0] || "";
  }
  return "";
}
