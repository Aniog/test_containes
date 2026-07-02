import { createContext, useContext, useState, useMemo } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState([])

  const addToCart = (product, quantity = 1, variant = null) => {
    setItems((currentItems) => {
      const existingItemIndex = currentItems.findIndex(
        (item) => item.id === product.id && item.variant === variant
      )
      
      if (existingItemIndex >= 0) {
        const newItems = [...currentItems]
        newItems[existingItemIndex].quantity += quantity
        return newItems
      }

      return [...currentItems, { ...product, quantity, variant }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, variant = null) => {
    setItems((currentItems) => 
      currentItems.filter(item => !(item.id === id && item.variant === variant))
    )
  }

  const updateQuantity = (id, quantity, variant = null) => {
    if (quantity <= 0) {
      removeFromCart(id, variant)
      return
    }
    
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }

  const totalItems = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((total, item) => total + (item.price * item.quantity), 0), [items])

  return (
    <CartContext.Provider value={{
      items,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      totalItems,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}