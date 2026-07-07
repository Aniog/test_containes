import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Resolve a pre-built image URL from the strk-img-config.json
 * Returns the first result URL for the given key, or empty string if not found.
 */
export function getResolvedImageUrl(strkImgConfig, key) {
  const entry = strkImgConfig[key]
  if (entry && entry.results && entry.results.length > 0) {
    return entry.results[0].url
  }
  return ''
}
