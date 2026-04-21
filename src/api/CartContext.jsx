import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ebook_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('ebook_cart', JSON.stringify(items))
  }, [items])

  const addToCart = (book) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === book.id)
      if (exists) return prev
      return [...prev, { id: book.id, data: book.data, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const clearCart = () => setItems([])

  const isInCart = (id) => items.some(i => i.id === id)

  const total = items.reduce((sum, item) => sum + (item.data?.price ?? 0), 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, isInCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
