import React, { createContext, useContext, useMemo, useState, useCallback } from "react"

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, variant = "Gold", quantity = 1) => {
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
      return [...current, { product, variant, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.product.id === productId && item.variant === variant))
    )
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    )
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, count }
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        ...totals,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
