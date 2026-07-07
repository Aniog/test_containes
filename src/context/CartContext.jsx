import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

function loadInitial() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// A cart line is uniquely identified by product id + tone variant.
function lineKey(productId, tone) {
  return `${productId}__${tone}`
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

  const addItem = useCallback((product, { tone, quantity = 1 } = {}) => {
    const chosenTone = tone || product?.tone?.[0] || 'Gold'
    const qty = Math.max(1, Number(quantity) || 1)
    setItems((current) => {
      const key = lineKey(product.id, chosenTone)
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + qty } : i
        )
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone: chosenTone,
          quantity: qty,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    const qty = Math.max(1, Number(quantity) || 1)
    setItems((current) =>
      current.map((i) => (i.key === key ? { ...i, quantity: qty } : i))
    )
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }, [])

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity * i.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, updateQuantity, removeItem]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
