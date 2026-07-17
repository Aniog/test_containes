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

  const addItem = useCallback((product, { quantity = 1, tone = 'gold' } = {}) => {
    setItems((current) => {
      const key = `${product.id}__${tone}`
      const existing = current.find((it) => it.key === key)
      if (existing) {
        return current.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + quantity } : it
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
          tone,
          quantity,
          titleId: product.titleId,
          descId: product.descId,
          imgId: product.imgId,
          shortDesc: product.shortDesc,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      current
        .map((it) => (it.key === key ? { ...it, quantity: Math.max(0, quantity) } : it))
        .filter((it) => it.quantity > 0)
    )
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((it) => it.key !== key))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((sum, it) => sum + it.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity * it.price, 0),
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
      clearCart,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, updateQuantity, removeItem, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
