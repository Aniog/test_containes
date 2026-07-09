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

// Resolve the picked stock image URL for a given data-strk-img-id from the
// pre-built config. Returns "" if not found.
export function resolveStrkImage(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry) return ""
  const pickedId = entry.picked
  if (!pickedId) return ""
  const result = (entry.results || []).find((r) => r.id === pickedId)
  return result?.url || ""
}
