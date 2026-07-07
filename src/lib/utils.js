import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import strkImgConfig from "@/strk-img-config.json"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// Resolve a cached image URL from the strk-img config by id.
// The config is pre-populated at dev time; using real src values
// directly avoids build-time placeholder-inlining issues and keeps
// images working in production builds.
// `index` lets callers pick a different result (e.g. an alternate
// product view) when the same id resolves to multiple candidates.
export function resolveImg(imgId, index = 0) {
  const entry = strkImgConfig[imgId]
  if (!entry || !Array.isArray(entry.results) || entry.results.length === 0) {
    return PLACEHOLDER
  }
  const result = entry.results[index] || entry.results[0]
  return result?.url || PLACEHOLDER
}
