import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, quantity = 1, variant = 'gold') => {
    setItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      )
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }
      return [...prev, { ...product, quantity, variant }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant) => {
    setItems(prev => prev.filter(
      item => !(item.id === productId && item.variant === variant)
    ))
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, variant)
      return
    }
    setItems(prev => prev.map(item =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity }
        : item
    ))
  }, [removeItem])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen(prev => !prev), [])

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      totalItems,
      totalPrice,
      openCart,
      closeCart,
      toggleCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
