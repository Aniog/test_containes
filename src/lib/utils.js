import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  const num = Number(value) || 0
  return `$${num.toFixed(0)}`
}

/**
 * Resolve a stock image URL at runtime from the bundled strk-img config.
 * Used for images whose ID is only known at runtime (e.g. cart line items
 * sourced from localStorage), where the build-time inliner cannot statically
 * resolve the data-strk-img-id expression.
 */
export function resolveStrkImgUrl(config, imgId) {
  if (!config || !imgId) return ''
  const entry = config[imgId]
  if (!entry) return ''
  const pickedId = entry.picked
  const results = Array.isArray(entry.results) ? entry.results : []
  const match = results.find((r) => r && r.id === pickedId)
  return match?.url || results[0]?.url || ''
}
