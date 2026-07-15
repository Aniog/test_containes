import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
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

  const addToCart = (product, variant, quantity = 1) => {
    const cartItem = {
      cartId: `${product.id}-${variant.id}-${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: Array.isArray(product.images) ? product.images[0] : product.images,
      variant: variant.label,
      variantId: variant.id,
      quantity,
    }

    setCart((prev) => [...prev, cartItem])
    // Auto-open cart only if it's not already open (user can continue shopping)
    if (!isCartOpen) {
      setIsCartOpen(true)
    }
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

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
