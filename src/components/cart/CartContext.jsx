import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, tone = 'gold', quantity = 1) => {
    setItems(prev => {
      const key = `${product.id}-${tone}`
      const existing = prev.find(i => i.key === key)
      if (existing) {
        return prev.map(i =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...prev, { key, product, tone, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(i => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }
    setItems(prev => prev.map(i =>
      i.key === key ? { ...i, quantity } : i
    ))
  }, [removeItem])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity,
      totalItems, totalPrice, isOpen, openCart, closeCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
