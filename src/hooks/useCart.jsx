import React, { createContext, useContext, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, options = {}) => {
    const tone = options.tone || product.tone?.[0] || 'gold'
    const quantity = Math.max(1, options.quantity || 1)

    setItems((current) => {
      const existing = current.find(
        (i) => i.product.id === product.id && i.tone === tone
      )
      if (existing) {
        return current.map((i) =>
          i.product.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [...current, { id: `${product.id}-${tone}`, product, tone, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((i) => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id, quantity) => {
    setItems((current) =>
      current
        .map((i) => (i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    return { subtotal, count }
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
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
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
