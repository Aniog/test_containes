import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import strkImgConfig from '@/strk-img-config.json'

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

// Resolve a strk-img-id to its first cached image URL from the build config.
// Used for dynamic contexts (e.g. cart drawer) where the Vite plugin cannot
// statically resolve data-strk-img-id expressions.
export function resolveImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  const results = entry?.results
  if (Array.isArray(results) && results.length > 0) {
    return results[0].url
  }
  return ''
}
