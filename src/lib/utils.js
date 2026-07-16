import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from '@/strk-img-config.json'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}

export function strkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return null
  const results = entry.results
  if (!Array.isArray(results) || results.length === 0) return null
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return results[0]?.url || null
}
