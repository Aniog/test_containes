import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, tone, quantity = 1) => {
    setItems((current) => {
      const existingItem = current.find(
        (entry) => entry.productId === product.id && entry.tone === tone,
      )

      if (existingItem) {
        return current.map((entry) =>
          entry.productId === product.id && entry.tone === tone
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry,
        )
      }

      return [
        ...current,
        {
          id: `${product.id}-${tone}`,
          productId: product.id,
          tone,
          quantity,
          product,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemId, quantity) => {
    setItems((current) =>
      current
        .map((entry) =>
          entry.id === itemId ? { ...entry, quantity: Math.max(quantity, 0) } : entry,
        )
        .filter((entry) => entry.quantity > 0),
    )
  }

  const removeItem = (itemId) => {
    setItems((current) => current.filter((entry) => entry.id !== itemId))
  }

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [items],
  )

  const value = {
    items,
    itemCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    addItem,
    updateQuantity,
    removeItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
