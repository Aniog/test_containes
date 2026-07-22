import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}

const _IMG_URL_CACHE = {}
const _FALLBACK =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
export function strkImageUrl(imgId) {
  if (!imgId) return _FALLBACK
  if (_IMG_URL_CACHE[imgId] !== undefined) return _IMG_URL_CACHE[imgId]
  const entry = strkImgConfig[imgId]
  let url = null
  if (entry) {
    const picked = entry.picked
    const result = (entry.results || []).find((r) => r.id === picked)
    url = result?.url || null
  }
  const resolved = url || _FALLBACK
  _IMG_URL_CACHE[imgId] = resolved
  return resolved
}
