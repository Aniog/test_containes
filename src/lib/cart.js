export function getCartItemId(productId, variant) {
  return `${productId}-${variant.toLowerCase().replace(/\s+/g, '-')}`
}

export function addItemToCart(items, product, variant = 'Gold', quantity = 1) {
  const itemId = getCartItemId(product.id, variant)
  const existing = items.find((item) => item.itemId === itemId)

  if (existing) {
    return items.map((item) =>
      item.itemId === itemId
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    )
  }

  return [
    ...items,
    {
      itemId,
      productId: product.id,
      name: product.name,
      price: product.price,
      variant,
      quantity,
      imageId: product.imageId,
      category: product.category,
    },
  ]
}

export function updateCartQuantity(items, itemId, quantity) {
  if (quantity <= 0) {
    return items.filter((item) => item.itemId !== itemId)
  }

  return items.map((item) =>
    item.itemId === itemId ? { ...item, quantity } : item,
  )
}

export function getCartSubtotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}
