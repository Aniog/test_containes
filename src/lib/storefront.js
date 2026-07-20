export const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

export const buildCartItemKey = (productId, variant) => `${productId}-${variant}`

export const getCartCount = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)

export const getCartTotal = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
