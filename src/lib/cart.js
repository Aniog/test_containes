export const formatPrice = (price) => `$${price}`

export const getCartItemId = (productId, tone = 'Gold') => `${productId}:${tone}`

export const getCartSubtotal = (items) =>
  items.reduce((total, item) => total + item.product.price * item.quantity, 0)

export const getCartCount = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
