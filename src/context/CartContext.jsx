import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addToCart = useCallback((game) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === game.id)
      if (existing) return prev
      return [...prev, { ...game, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((gameId) => {
    setItems(prev => prev.filter(i => i.id !== gameId))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const isInCart = useCallback((gameId) => items.some(i => i.id === gameId), [items])

  const cartCount = items.length
  const cartTotal = items.reduce((sum, item) => {
    const price = item.data?.sale_price || item.data?.price || 0
    return sum + price
  }, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, isInCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
