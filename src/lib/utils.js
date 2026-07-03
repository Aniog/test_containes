import { clsx } from "clsx"

export function cn(...inputs) {
  return clsx(inputs)
}

export function formatPrice(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return ""
  return `$${value.toFixed(0)}`
}
