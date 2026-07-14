import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
}

/**
 * Resolve a strk image URL at runtime by looking up the imgId in the
 * strk-img config. Used for runtime-dynamic images (e.g. cart items) that
 * the build plugin cannot statically resolve.
 *
 * Returns the picked image URL, or the first result, or '' if not found.
 */
export function getImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return ''
  const results = entry.results
  if (!Array.isArray(results) || results.length === 0) return ''
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || ''
}
