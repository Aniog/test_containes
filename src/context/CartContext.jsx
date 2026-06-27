import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function readSavedCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readSavedCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((product, tone = 'gold', qty = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.tone === tone
      )
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      }
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity: qty,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, tone) => {
    setItems((current) => current.filter((item) => !(item.id === id && item.tone === tone)))
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity < 1) {
      removeItem(id, tone)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

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
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
