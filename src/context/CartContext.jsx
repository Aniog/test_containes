import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((product, options = {}) => {
    setItems((current) => {
      const existing = current.find(
        (i) => i.product.id === product.id && i.tone === options.tone
      )
      if (existing) {
        return current.map((i) =>
          i.product.id === product.id && i.tone === options.tone
            ? { ...i, quantity: i.quantity + (options.quantity || 1) }
            : i
        )
      }
      return [
        ...current,
        {
          id: `${product.id}-${options.tone || product.tone}`,
          product,
          tone: options.tone || product.tone,
          quantity: options.quantity || 1,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((i) => i.id !== lineId))
  }, [])

  const updateQuantity = useCallback((lineId, quantity) => {
    if (quantity < 1) {
      setItems((current) => current.filter((i) => i.id !== lineId))
      return
    }
    setItems((current) =>
      current.map((i) => (i.id === lineId ? { ...i, quantity } : i))
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, i) => sum + i.product.price * i.quantity,
      0
    )
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    return { subtotal, count }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clearCart, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}

export { CartProvider, useCart }
