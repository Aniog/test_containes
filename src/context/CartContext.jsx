import React, { createContext, useContext, useState, useCallback, useRef } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const pulseTimer = useRef(null)

  const triggerPulse = useCallback(() => {
    setJustAdded(true)
    if (pulseTimer.current) clearTimeout(pulseTimer.current)
    pulseTimer.current = setTimeout(() => setJustAdded(false), 500)
  }, [])

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    setItems(prev => {
      const key = `${product.id}-${variant}`
      const existing = prev.find(item => item.key === key)
      if (existing) {
        return prev.map(item =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, {
        key,
        id: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        image: product.image,
      }]
    })
    triggerPulse()
    setIsOpen(true)
  }, [triggerPulse])

  const removeItem = useCallback((key) => {
    setItems(prev => prev.filter(item => item.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(item => item.key !== key))
      return
    }
    setItems(prev =>
      prev.map(item =>
        item.key === key ? { ...item, quantity } : item
      )
    )
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      totalItems,
      totalPrice,
      isOpen,
      openCart,
      closeCart,
      justAdded,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
