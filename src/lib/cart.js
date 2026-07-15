export const formatPrice = (price) => `$${price}`

export const calculateCartTotal = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)

export const calculateCartCount = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
