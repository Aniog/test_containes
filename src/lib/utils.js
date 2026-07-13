import { clsx } from "clsx"

export function cn(...inputs) {
  return clsx(inputs)
}

export function formatPrice(price) {
  return `$${price.toFixed(0)}`
}
