export function getCartTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export function getCartCount(items) {
  return items.reduce((total, item) => total + item.quantity, 0)
}
