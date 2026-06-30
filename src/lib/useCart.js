import { useState } from 'react'

export function useCart() {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product, quantity = 1, variant = null) => {
    setItems(current => {
      const existing = current.find(item => 
        item.id === product.id && item.variant === variant
      )
      
      if (existing) {
        return current.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...current, { ...product, quantity, variant }]
    })
    setIsOpen(true)
  }

  const removeItem = (productId, variant = null) => {
    setItems(current => 
      current.filter(item => 
        !(item.id === productId && item.variant === variant)
      )
    )
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variant)
      return
    }

    setItems(current =>
      current.map(item =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)

  return {
    items,
    isOpen,
    setIsOpen,
    addItem,
    removeItem,
    updateQuantity,
    cartCount,
    cartTotal
  }
}