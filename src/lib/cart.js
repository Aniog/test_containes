export function formatPrice(value) {
  return `$${Number(value).toFixed(0)}`
}

export function getCartCount(items) {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

export function getCartSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
