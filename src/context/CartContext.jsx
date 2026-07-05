import React, { createContext, useContext, useState } from 'react'
import { toast } from 'sonner'

const CartContext = createContext()

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      cartId: `${product.id}-${variant}`,
      selectedVariant: variant,
      quantity,
    }

    setCart((prev) => {
      const existing = prev.findIndex(
        (item) => item.cartId === cartItem.cartId
      )
      if (existing !== -1) {
        const updated = [...prev]
        updated[existing].quantity += quantity
        return updated
      }
      return [...prev, cartItem]
    })

    toast.success(`${product.name} added to cart`, {
      description: `${variant} • Qty ${quantity}`,
      action: {
        label: 'View Cart',
        onClick: () => setIsCartOpen(true),
      },
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return
    setCart((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
