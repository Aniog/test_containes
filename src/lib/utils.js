import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Resolve a stock image URL directly from the build-time config.
// Use this for runtime/dynamic contexts (e.g. cart drawer) where the
// SDK's loadImages re-scan may not reliably pick up newly-mounted elements.
export function resolveStrkImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry?.results?.length) return null
  const picked = entry.picked
    ? entry.results.find((r) => String(r.id) === String(entry.picked))
    : entry.results[0]
  return picked?.url || null
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}
