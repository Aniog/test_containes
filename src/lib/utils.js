import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  const n = Number(value) || 0
  return `$${n.toFixed(0)}`
}

export function getStrkImageUrl(config, imgId) {
  const entry = config?.[imgId]
  const results = entry?.results
  if (!Array.isArray(results) || results.length === 0) return ''
  if (entry?.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || ''
}
