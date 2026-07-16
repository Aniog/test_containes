import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
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
      return [...prev, { ...product, variant, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant) => {
    setItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)))
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => !(item.id === productId && item.variant === variant)))
      return
    }
    setItems(prev => {
      const index = prev.findIndex(item => item.id === productId && item.variant === variant)
      if (index >= 0) {
        const updated = [...prev]
        updated[index] = { ...updated[index], quantity }
        return updated
      }
      return prev
    })
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
