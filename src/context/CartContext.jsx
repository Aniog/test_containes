import React, { createContext, useContext, useState } from 'react'
import { toast } from 'sonner'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      selectedVariant: variant,
      cartId: `${product.id}-${variant}-${Date.now()}`
    }
    
    setCart(prev => [...prev, { ...cartItem, quantity }])
    setIsCartOpen(true)
    toast.success(`${product.name} added to cart`, {
      description: `$${product.price} • ${variant} Tone`,
      action: {
        label: 'View Cart',
        onClick: () => setIsCartOpen(true)
      }
    })
  }

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, quantity) => {
    if (quantity < 1) return
    setCart(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, quantity } : item
      )
    )
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.length

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )
}