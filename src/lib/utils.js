import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Resolve a strk-img slot's picked image URL by its imgId.
 * Used for runtime/dynamic contexts (e.g. cart drawer) where the
 * build-time strk-img plugin cannot statically resolve template literals.
 */
export function resolveStrkImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const pickedId = entry.picked
  const results = entry.results || []
  const match = results.find((r) => r.id === pickedId) || results[0]
  return match ? match.url : null
}

export function formatPrice(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
