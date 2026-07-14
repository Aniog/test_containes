import React, { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, quantity, variant }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, variant) => {
    setItems((current) => current.filter((item) => !(item.id === id && item.variant === variant)))
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant)
      return
    }
    setItems((current) =>
      current.map((item) => (item.id === id && item.variant === variant ? { ...item, quantity } : item)),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
      products,
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
