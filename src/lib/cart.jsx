import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const addToCart = (product, variant = 'gold', quantity = 1) => {
    const cartItem = {
      id: `${product.id}-${variant}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      variant,
      quantity,
    }

    setItems((current) => {
      const existing = current.findIndex(
        (item) => item.id === cartItem.id
      )

      if (existing !== -1) {
        const updated = [...current]
        updated[existing] = {
          ...updated[existing],
          quantity: updated[existing].quantity + quantity,
        }
        return updated
      }

      return [...current, cartItem]
    })

    setIsOpen(true)
  }

  const removeFromCart = (itemId) => {
    setItems((current) => current.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) return

    setItems((current) =>
      current.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isOpen,
        setIsOpen,
      }}
    >
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
