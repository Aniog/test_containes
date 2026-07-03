import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) setItems(JSON.parse(stored))
    } catch (e) {
      console.error('Failed to load cart', e)
    }
  }, [])

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.error('Failed to save cart', e)
    }
  }, [items])

  const addItem = useCallback((product, options = {}) => {
    const tone = options.tone || product.tones?.[0] || 'Gold'
    const quantity = options.quantity || 1
    const lineKey = `${product.id}-${tone}`

    setItems((current) => {
      const existing = current.find((item) => item.key === lineKey)
      if (existing) {
        return current.map((item) =>
          item.key === lineKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [
        ...current,
        {
          key: lineKey,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imgId: product.imgId,
          imgIdAlt: product.imgIdAlt,
          titleId: product.titleId,
          descId: product.descId,
          shortDesc: product.shortDesc,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity < 1) return
    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity } : item,
      ),
    )
  }, [])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    subtotal,
    count,
    isOpen,
    setIsOpen,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
