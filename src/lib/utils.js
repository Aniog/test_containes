import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  if (typeof value !== "number") return ""
  return `$${value.toFixed(2)}`
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
