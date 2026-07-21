import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          image: product.images[0],
          variant,
          quantity,
        },
      ]
    })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.variant === variant)
      )
    )
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      setItems((prev) =>
        prev.filter(
          (item) => !(item.productId === productId && item.variant === variant)
        )
      )
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isDrawerOpen,
        setIsDrawerOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
