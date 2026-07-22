import React, { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const addItem = useCallback((product, tone = 'gold', quantity = 1) => {
    setItems(prev => {
      const key = `${product.id}-${tone}`
      const existing = prev.find(item => item.key === key)
      if (existing) {
        return prev.map(item =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, {
        key,
        productId: product.id,
        name: product.name,
        price: product.price,
        tone,
        quantity,
        imgId: product.imgId,
        titleId: product.titleId,
        descId: product.descId,
      }]
    })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(item => item.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => item.key !== key))
      return
    }
    setItems(prev => prev.map(item =>
      item.key === key ? { ...item, quantity } : item
    ))
  }, [])

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

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
