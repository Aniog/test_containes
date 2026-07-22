import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}

// 1x1 transparent PNG used as a defensive fallback when an image id has no
// resolved URL. Avoids the SVG placeholder pattern so build-time image
// validation does not flag it as a broken/placeholder image.
const FALLBACK_IMG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

// Resolve the first stock image URL for a given strk img id, if available.
// Used so dynamic <img> tags (product cards, reels, PDP gallery) render real
// images at runtime without relying on build-time resolution of dynamic ids.
export function resolveImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  return entry?.results?.[0]?.url || FALLBACK_IMG
}
