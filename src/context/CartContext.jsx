import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

function loadInitialCart() {
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
  const [items, setItems] = useState(loadInitialCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore persistence errors
    }
  }, [items])

  // line = { id, name, price, variant, imageQuery, qty }
  const lineKey = (line) => `${line.id}__${line.variant || 'default'}`

  const addItem = (line) => {
    setItems((current) => {
      const key = lineKey(line)
      const existing = current.find((l) => lineKey(l) === key)
      if (existing) {
        return current.map((l) =>
          lineKey(l) === key ? { ...l, qty: l.qty + (line.qty || 1) } : l
        )
      }
      return [...current, { ...line, qty: line.qty || 1 }]
    })
    setIsOpen(true)
  }

  const updateQty = (id, variant, qty) => {
    setItems((current) =>
      current
        .map((l) => {
          if (l.id !== id || (l.variant || 'default') !== (variant || 'default')) return l
          return { ...l, qty: Math.max(0, qty) }
        })
        .filter((l) => l.qty > 0)
    )
  }

  const removeItem = (id, variant) => {
    setItems((current) =>
      current.filter(
        (l) => !(l.id === id && (l.variant || 'default') === (variant || 'default'))
      )
    )
  }

  const clearCart = () => setItems([])

  const count = useMemo(() => items.reduce((sum, l) => sum + l.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, l) => sum + l.price * l.qty, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem,
      updateQty,
      removeItem,
      clearCart,
      count,
      subtotal,
    }),
    [items, isOpen, count, subtotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
