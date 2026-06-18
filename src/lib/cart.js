export const formatPrice = (value) => `$${value.toFixed(0)}`

export const getCartItemId = (productId, variant) => `${productId}-${variant}`

export const getCartSubtotal = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)

export const getCartCount = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
