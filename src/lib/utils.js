import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  if (typeof value !== 'number') return value
  return `$${value.toFixed(value % 1 === 0 ? 0 : 2)}`
}

export function cx(...args) {
  return args.filter(Boolean).join(' ')
}
