import { clsx } from 'clsx'

export function cn(...inputs) {
  return clsx(inputs)
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

export function getImageQuery(refs) {
  return refs.join(' ')
}
