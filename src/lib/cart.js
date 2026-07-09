export const getCartLineTotal = (item) => item.price * item.quantity

export const getCartCount = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)

export const getCartSubtotal = (items) =>
  items.reduce((total, item) => total + getCartLineTotal(item), 0)
