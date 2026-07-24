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
 * Resolve a real image URL from the build-time strk-img config for a given
 * image ID. Returns the placeholder SVG if not found. Use this for images
 * that may re-render (e.g. inside the cart drawer) so React controls the src
 * and doesn't reset it to the placeholder after ImageHelper already set it.
 */
export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const pickedId = entry.picked
  if (!pickedId) return null
  const picked = (entry.results || []).find((r) => r.id === pickedId)
  return picked?.url || null
}

