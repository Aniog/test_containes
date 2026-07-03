import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return ""
  return `$${value.toFixed(0)}`
}
