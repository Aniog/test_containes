import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((product, quantity = 1, tone = product.tones?.[0] || 'gold') => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.tone === tone
      )
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, tone) => {
    setItems((current) =>
      current.filter((item) => !(item.id === productId && item.tone === tone))
    )
  }, [])

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity < 1) {
      removeItem(productId, tone)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5
    return { subtotal, count, shipping, total: subtotal + shipping }
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

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
