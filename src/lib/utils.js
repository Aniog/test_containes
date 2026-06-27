import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(amount) {
  if (typeof amount !== 'number') return ''
  return `$${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`
}