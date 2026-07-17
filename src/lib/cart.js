export const getCartCount = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)

export const getCartSubtotal = (items) =>
  items.reduce((total, item) => total + item.product.price * item.quantity, 0)

export const upsertCartItem = (items, product, tone = 'Gold', quantity = 1) => {
  const key = `${product.id}-${tone}`
  const existing = items.find((item) => item.key === key)

  if (existing) {
    return items.map((item) =>
      item.key === key
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    )
  }

  return [...items, { key, product, tone, quantity }]
}
