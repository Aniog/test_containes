export const formatPrice = (value) => `$${value.toFixed(0)}`

export const getCartQuantity = (items) =>
  items.reduce((total, item) => total + item.quantity, 0)

export const getCartSubtotal = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)

export const addProductToCart = (items, product, variant = 'Gold Tone', quantity = 1) => {
  const key = `${product.id}-${variant}`
  const existingItem = items.find((item) => item.key === key)

  if (existingItem) {
    return items.map((item) =>
      item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
    )
  }

  return [
    ...items,
    {
      key,
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      variant,
      quantity,
      imageHint: product.imageHint,
    },
  ]
}

export const updateCartItemQuantity = (items, key, quantity) => {
  if (quantity <= 0) {
    return items.filter((item) => item.key !== key)
  }

  return items.map((item) => (item.key === key ? { ...item, quantity } : item))
}
