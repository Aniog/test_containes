import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toast, setToast] = useState(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora_cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora_cart', JSON.stringify(cart))
  }, [cart])

  // Show toast notification
  const showToast = (message) => {
    setToast(message)
    setTimeout(() => setToast(null), 3000)
  }

  // Add item to cart
  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartItem = {
      ...product,
      selectedVariant: variant,
      cartId: `${product.id}-${variant}-${Date.now()}`,
    }

    setCart((prev) => {
      // Check if same product + variant already exists
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.selectedVariant === variant
      )

      if (existingIndex !== -1) {
        // Increment quantity
        const updated = [...prev]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: (updated[existingIndex].quantity || 1) + quantity,
        }
        return updated
      } else {
        return [...prev, { ...cartItem, quantity }]
      }
    })

    showToast('Added to cart')
    setIsCartOpen(true)
  }

  // Remove item from cart
  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  // Update quantity
  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return
    setCart((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Clear cart
  const clearCart = () => {
    setCart([])
  }

  // Calculate totals
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  )

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <CartContext.Provider
      value={{
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
      }}
    >
      {children}
      {toast && <div className="toast">{toast}</div>}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}