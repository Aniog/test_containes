export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export const formatCategory = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1)

export const getPriceBand = (price) => {
  if (price < 50) return 'Under $50'
  if (price <= 80) return '$50 - $80'
  return '$80+'
}
