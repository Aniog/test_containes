import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from '@/strk-img-config.json'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(n);

/**
 * Look up a resolved stock-image URL from the build-time strk-img config.
 * Used for runtime-driven images (e.g. cart items) where the static
 * data-strk-img inlining pass cannot determine candidate image IDs.
 */
export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry?.results?.length) return ''
  const picked = entry.picked
    ? entry.results.find((r) => String(r.id) === String(entry.picked))
    : null
  return picked?.url || entry.results[0]?.url || ''
}
