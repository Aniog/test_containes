import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Format payload for API submission with proper type casting
export function formatPayload(data) {
  const formatted = { ...data }
  
  // Convert string numbers to actual numbers
  Object.keys(formatted).forEach(key => {
    const value = formatted[key]
    
    // Convert numeric strings to numbers
    if (typeof value === 'string' && !isNaN(value) && value !== '') {
      formatted[key] = Number(value)
    }
    
    // Convert boolean strings to booleans
    if (value === 'true') formatted[key] = true
    if (value === 'false') formatted[key] = false
  })
  
  return { data: formatted }
}

// Format price for display
export function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

// Calculate discount percentage
export function calculateDiscount(originalPrice, salePrice) {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

// Format date for display
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Get platform color for badges
export function getPlatformColor(platform) {
  const colors = {
    'Steam': 'bg-blue-600',
    'Epic': 'bg-gray-800',
    'Nintendo Switch': 'bg-red-600',
    'PlayStation': 'bg-blue-800',
    'Xbox': 'bg-green-600',
    'Multi-platform': 'bg-purple-600'
  }
  return colors[platform] || 'bg-gray-600'
}