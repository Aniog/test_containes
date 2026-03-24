import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Format price with currency
export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

// Calculate discount percentage
export function calculateDiscount(originalPrice, salePrice) {
  if (!originalPrice || !salePrice || salePrice >= originalPrice) return 0
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

// Format date
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Get platform color
export function getPlatformColor(platform) {
  const colors = {
    'Steam': 'bg-blue-600',
    'Epic': 'bg-gray-800',
    'Nintendo Switch': 'bg-red-500',
    'PlayStation': 'bg-blue-700',
    'Xbox': 'bg-green-600',
    'PC': 'bg-purple-600',
    'Multi-platform': 'bg-gradient-to-r from-blue-500 to-purple-600'
  }
  return colors[platform] || 'bg-gray-500'
}

// Get platform icon (you can replace with actual icons)
export function getPlatformIcon(platform) {
  const icons = {
    'Steam': '🎮',
    'Epic': '🎯',
    'Nintendo Switch': '🎮',
    'PlayStation': '🎮',
    'Xbox': '🎮',
    'PC': '💻',
    'Multi-platform': '🌐'
  }
  return icons[platform] || '🎮'
}