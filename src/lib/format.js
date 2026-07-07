export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function toSlug(value) {
  return String(value).toLowerCase().replace(/\s+/g, '-')
}

export function getCartCount(items) {
  return items.reduce((total, item) => total + item.quantity, 0)
}

export function getCartSubtotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}
