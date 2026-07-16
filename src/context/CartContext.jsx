import React, { createContext, useContext, useState, useEffect } from 'react'
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

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      selectedVariant: variant,
      cartId: `${product.id}-${variant}-${Date.now()}`,
      quantity,
    }

    setCart((prevCart) => {
      // Check if same product + variant already exists
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedVariant === variant
      )

      if (existingIndex !== -1) {
        // Update quantity
        const updated = [...prevCart]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      } else {
        return [...prevCart, cartItem]
      }
    })

    toast.success(`${product.name} added to cart`, {
      description: `${variant} • Qty ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => setIsCartOpen(true),
      },
    })
  }

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId))
    toast.info('Item removed from cart')
  }

  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('velmora-cart')
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isCartOpen,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
