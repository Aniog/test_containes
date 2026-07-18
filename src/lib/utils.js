import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Format price
export function formatPrice(price) {
  return `$${price}`
}

// Generate slug from name
export function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
}