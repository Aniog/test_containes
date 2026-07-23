import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const addItem = useCallback((product, color = 'gold', qty = 1) => {
    setItems(prev => {
      const key = `${product.id}-${color}`
      const existing = prev.find(i => i.key === key)
      if (existing) {
        return prev.map(i =>
          i.key === key ? { ...i, quantity: i.quantity + qty } : i
        )
      }
      return [...prev, {
        key,
        product,
        color,
        quantity: qty,
      }]
    })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.key !== key))
      return
    }
    setItems(prev =>
      prev.map(i => i.key === key ? { ...i, quantity } : i)
    )
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  const openDrawer = useCallback(() => setIsDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      totalItems,
      subtotal,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
    }}>
      {children}
    </CartContext.Provider>
  )
}
