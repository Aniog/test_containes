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
 * Resolve a static image URL from the strk image config by its imgId.
 * Falls back to a transparent placeholder if not found.
 */
export function resolveImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (entry && Array.isArray(entry.results) && entry.results.length > 0) {
    return entry.results[0].url
  }
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E%3C/svg%3E"
}
