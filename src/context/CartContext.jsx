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
      cartId: `${product.id}-${variant}`,
      quantity,
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.cartId === cartItem.cartId
      )

      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.cartId === cartItem.cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        toast.success(`Updated quantity for ${product.name}`, {
          description: `${variant} tone`,
        })
        return updatedCart
      } else {
        toast.success(`Added to cart`, {
          description: `${product.name} • ${variant}`,
        })
        return [...prevCart, cartItem]
      }
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (cartId) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.cartId === cartId)
      if (item) {
        toast.info(`Removed from cart`, {
          description: item.name,
        })
      }
      return prevCart.filter((item) => item.cartId !== cartId)
    })
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

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const value = {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
