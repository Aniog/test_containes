import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from '@/strk-img-config.json'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getStrkImage(imgId) {
  const entry = strkImgConfig[imgId]
  if (entry?.picked && entry.results) {
    const picked = entry.results.find((r) => r.id === entry.picked)
    if (picked) return picked.url
    return entry.results[0]?.url || ''
  }
  return ''
}
