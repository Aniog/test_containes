import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const addItem = useCallback((product, options = {}) => {
    const { quantity = 1, tone = product.tone[0] || 'gold' } = options

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
          image: product.image,
        },
      ]
    })

    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, tone) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.tone === tone))
    )
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity < 1) {
      setItems((current) =>
        current.filter((item) => !(item.id === id && item.tone === tone))
      )
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 6
    const total = subtotal + shipping

    return { subtotal, itemCount, shipping, total }
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
