import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((s) => !s), [])

  const addToCart = useCallback((product, variantId, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.variantId === variantId
      )
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.variantId === variantId
            ? { ...i, quantity: i.quantity + qty }
            : i
        )
      }
      return [...prev, { product, variantId, quantity: qty }]
    })
  }, [])

  const removeFromCart = useCallback((productId, variantId) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.variantId === variantId))
    )
  }, [])

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId)
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && i.variantId === variantId
          ? { ...i, quantity }
          : i
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
