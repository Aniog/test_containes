import React, { createContext, useContext, useState, useMemo, useCallback } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, variant = "gold", quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id && item.variant === variant
      )
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...current, { id: `${product.id}-${variant}-${Date.now()}`, product, variant, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((itemId) => {
    setItems((current) => current.filter((item) => item.id !== itemId))
  }, [])

  const updateQuantity = useCallback((itemId, quantity) => {
    if (quantity < 1) {
      removeItem(itemId)
      return
    }
    setItems((current) =>
      current.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, count }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, addItem, removeItem, updateQuantity, clearCart, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
