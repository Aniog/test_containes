import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  const n = Number(value) || 0
  return `$${n.toFixed(0)}`
}

export function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
}

/**
 * Resolve a strk image ID to a CDN URL directly from the config.
 * Used for runtime-dynamic contexts (e.g. cart drawer) where the
 * build-time strk-img inliner cannot statically trace image IDs.
 */
export function getStrkImageUrl(imgId, targetWidth = 400) {
  const entry = strkImgConfig?.[imgId]
  if (!entry) return ""
  const results = entry.results
  if (!Array.isArray(results) || results.length === 0) return ""
  const picked = entry.picked
    ? results.find((r) => String(r.id) === String(entry.picked))
    : null
  const raw = (picked || results[0])?.url
  if (!raw) return ""
  try {
    const url = new URL(raw)
    const width = Math.max(400, Math.round(targetWidth * 2))
    url.searchParams.set("w", String(width))
    url.searchParams.set("q", "90")
    url.searchParams.set("fit", "max")
    url.searchParams.set("fm", "jpg")
    return url.toString()
  } catch {
    return raw
  }
}
