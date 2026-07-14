import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

function loadInitial() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((productId, { tone = null, quantity = 1 } = {}) => {
    setItems((current) => {
      const product = products.find((p) => p.id === productId)
      const toneValue = tone || product?.tones?.[0] || 'Gold'
      const existing = current.find(
        (i) => i.productId === productId && i.tone === toneValue,
      )
      if (existing) {
        return current.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + quantity } : i,
        )
      }
      return [...current, { productId, tone: toneValue, quantity }]
    })
    setIsOpen(true)
  }, [])

  const updateQuantity = useCallback((productId, tone, quantity) => {
    setItems((current) =>
      current
        .map((i) =>
          i.productId === productId && i.tone === tone
            ? { ...i, quantity: Math.max(0, quantity) }
            : i,
        )
        .filter((i) => i.quantity > 0),
    )
  }, [])

  const removeItem = useCallback((productId, tone) => {
    setItems((current) =>
      current.filter((i) => !(i.productId === productId && i.tone === tone)),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const detailedItems = useMemo(
    () =>
      items
        .map((i) => {
          const product = products.find((p) => p.id === i.productId)
          if (!product) return null
          return { ...i, product }
        })
        .filter(Boolean),
    [items],
  )

  const count = useMemo(
    () => detailedItems.reduce((sum, i) => sum + i.quantity, 0),
    [detailedItems],
  )

  const subtotal = useMemo(
    () => detailedItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [detailedItems],
  )

  const value = useMemo(
    () => ({
      items: detailedItems,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [detailedItems, count, subtotal, isOpen, openCart, closeCart, addItem, updateQuantity, removeItem, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
