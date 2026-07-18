import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}

/**
 * Resolve a Strikingly image ID to its CDN URL at render time.
 * Used for dynamic image IDs (e.g. product.imgId) that the build-time
 * strk-img plugin cannot statically resolve, ensuring real URLs appear
 * in the built output instead of placeholder SVGs.
 */
export function resolveImgUrl(imgId) {
  if (!imgId) return null
  const entry = strkImgConfig[imgId]
  if (!entry?.results?.length) return null
  const picked = entry.picked
    ? entry.results.find((r) => String(r.id) === String(entry.picked))
    : entry.results[0]
  return picked?.url || null
}
