import React, { createContext, useContext, useState, useCallback } from 'react'
import { toast } from 'sonner'

const CartContext = createContext(null)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.variant === variant)
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, variant, quantity }]
    })
    toast.success(`${product.name} added to your bag`, {
      description: `${variant} tone · $${product.price}`,
      duration: 3000,
    })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant) => {
    setItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)))
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
