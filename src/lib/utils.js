import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function flattenClassName(value) {
  if (!value) return ""
  if (typeof value === "string" || typeof value === "number") return String(value)
  if (Array.isArray(value)) return value.map(flattenClassName).filter(Boolean).join(" ")
  if (typeof value === "object") {
    return Object.keys(value)
      .filter((key) => Boolean(value[key]))
      .map((key) => key)
      .join(" ")
  }
  return ""
}

export function cn(...inputs) {
  const merged = inputs.map(flattenClassName).filter(Boolean).join(" ")
  return twMerge(merged)
}

export function formatPrice(value) {
  if (typeof value !== "number") return ""
  return `$${value.toFixed(0)}`
}

export function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}
