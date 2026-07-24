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
      const existing = prev.find(i => i.id === product.id && i.tone === tone)
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [...prev, { ...product, tone, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, tone) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.tone === tone)))
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => !(i.id === id && i.tone === tone)))
      return
    }
    setItems(prev =>
      prev.map(i =>
        i.id === id && i.tone === tone ? { ...i, quantity } : i
      )
    )
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQuantity,
      totalItems, totalPrice, isOpen, openCart, closeCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}
