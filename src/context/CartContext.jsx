import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

const loadInitial = () => {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
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

  const addItem = useCallback((product, { variant, quantity = 1 } = {}) => {
    const lineId = `${product.id}__${variant || 'default'}`
    setItems((current) => {
      const existing = current.find((i) => i.lineId === lineId)
      if (existing) {
        return current.map((i) =>
          i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...current,
        {
          lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          imageId: product.images?.[0]?.id,
          imageAlt: product.images?.[0]?.alt,
          variant: variant || null,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((i) => i.lineId !== lineId))
  }, [])

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) =>
      current
        .map((i) =>
          i.lineId === lineId ? { ...i, quantity: Math.max(0, quantity) } : i
        )
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((n, i) => n + i.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((n, i) => n + i.price * i.quantity, 0),
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
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
