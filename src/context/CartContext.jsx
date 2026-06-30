import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity = 1, variant = 'gold') => {
    setCart(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.variant === variant
      )

      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += quantity
        return updated
      }

      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity
      }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, variant) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.variant === variant)))
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, variant)
      return
    }
    setCart(prev => prev.map(item => {
      if (item.id === id && item.variant === variant) {
        return { ...item, quantity }
      }
      return item
    }))
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount
    }}>
      {children}
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
