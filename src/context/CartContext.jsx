import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const buildItemKey = (productId, variant) => `${productId}-${variant}`

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const addItem = (product, variant, quantity = 1) => {
    const itemKey = buildItemKey(product.id, variant)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.itemKey === itemKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.itemKey === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          itemKey,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.cardImages[0],
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (itemKey) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.itemKey !== itemKey),
    )
  }

  const updateQuantity = (itemKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(itemKey)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.itemKey === itemKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      cartCount,
      subtotal,
    }),
    [items, isCartOpen, cartCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
