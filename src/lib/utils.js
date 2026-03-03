import { clsx } from "clsx"

export function cn(...inputs) {
  return clsx(inputs)
}

export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function calculateDiscount(originalPrice, salePrice) {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

export function getPlatformColor(platform) {
  const colors = {
    Steam: 'bg-blue-600',
    Epic: 'bg-gray-800',
    Nintendo: 'bg-red-600',
    PlayStation: 'bg-blue-800',
    Xbox: 'bg-green-600'
  }
  return colors[platform] || 'bg-gray-600'
}