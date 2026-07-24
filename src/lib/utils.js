import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}

const TRANSPARENT_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

export function resolveStrkImageUrl(imgId) {
  if (!imgId) return TRANSPARENT_PIXEL
  const entry = strkImgConfig[imgId]
  if (!entry) return TRANSPARENT_PIXEL
  const picked = entry.picked
  const results = entry.results || []
  const match = picked
    ? results.find((r) => r.id === picked)
    : results[0]
  return match?.url || TRANSPARENT_PIXEL
}
