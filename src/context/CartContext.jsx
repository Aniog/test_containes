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

// line item: { key, slug, name, price, tone, qty, imageQueryIds }
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

  const addItem = useCallback((product, { tone = 'gold', qty = 1 } = {}) => {
    const key = `${product.slug}__${tone}`
    setItems((current) => {
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [
        ...current,
        {
          key,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          tone,
          qty,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const updateQty = useCallback((key, qty) => {
    setItems((current) =>
      current
        .map((i) => (i.key === key ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }, [])

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((n, i) => n + i.qty * i.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQty,
      removeItem,
      count,
      subtotal,
    }),
    [items, isOpen, openCart, closeCart, addItem, updateQty, removeItem, count, subtotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
