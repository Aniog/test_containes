import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price) => `$${price}`

export const getProductById = (products, productId) =>
  products.find((product) => product.id === productId) || products[0]
