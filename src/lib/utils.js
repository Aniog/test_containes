import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price) {
  return `$${price}`
}

export function getStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry || !Array.isArray(entry.results) || entry.results.length === 0) return null
  if (entry.picked) {
    const picked = entry.results.find((r) => String(r.id) === String(entry.picked))
    if (picked?.url) return picked.url
  }
  return entry.results[0]?.url || null
}
