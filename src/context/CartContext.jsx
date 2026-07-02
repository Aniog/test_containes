import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext()

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const addToCart = useCallback((product, variant, quantity = 1) => {
    setItems((current) => {
      const existingIndex = current.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      )
      if (existingIndex >= 0) {
        const updated = [...current]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }
      return [
        ...current,
        {
          id: `${product.id}-${variant}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          variant,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }, [])

  const removeFromCart = useCallback((itemId) => {
    setItems((current) => current.filter((item) => item.id !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== itemId))
      return
    }
    setItems((current) =>
      current.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
