import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = (game) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === game.id)
      if (exists) return prev
      return [...prev, { ...game, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const removeFromCart = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, item) => {
    const price = item.data?.sale_price || item.data?.price || 0
    return sum + price * item.quantity
  }, 0)

  const count = items.length

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total, count, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
