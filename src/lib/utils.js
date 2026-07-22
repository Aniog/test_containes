import { clsx } from 'clsx'

export function cn(...inputs) {
  return clsx(inputs)
}

export function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
}
