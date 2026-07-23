import React, { createContext, useContext, useState, useCallback } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((productId, quantity = 1, tone = 'gold') => {
    const product = products.find(p => p.id === productId)
    if (!product) return

    setItems(prev => {
      const existing = prev.find(item => item.productId === productId && item.tone === tone)
      if (existing) {
        return prev.map(item =>
          item.productId === productId && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { productId, tone, quantity, product }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, tone) => {
    setItems(prev => prev.filter(item => !(item.productId === productId && item.tone === tone)))
  }, [])

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, tone)
      return
    }
    setItems(prev => prev.map(item =>
      item.productId === productId && item.tone === tone
        ? { ...item, quantity }
        : item
    ))
  }, [removeItem])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

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
