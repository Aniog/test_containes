import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const addItem = useCallback((product, tone = 'gold', quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.tone === tone
      )
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, tone, quantity }]
    })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((productId, tone) => {
    setItems(prev => prev.filter(
      item => !(item.id === productId && item.tone === tone)
    ))
  }, [])

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, tone)
      return
    }
    setItems(prev => prev.map(item =>
      item.id === productId && item.tone === tone
        ? { ...item, quantity }
        : item
    ))
  }, [removeItem])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const openDrawer = useCallback(() => setIsDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      totalItems,
      totalPrice,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
    }}>
      {children}
    </CartContext.Provider>
  )
}
