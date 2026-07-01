import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen((v) => !v)

  const addItem = (product, variant, quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.variant === variant
      )
      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...current,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          slug: product.slug,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (productId, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.productId === productId && item.variant === variant))
    )
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => setItems([])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
