import React, { createContext, useContext, useMemo, useState, useCallback } from 'react'

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

  const persist = useCallback((next) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* ignore storage errors */
    }
  }, [])

  const addItem = useCallback(
    (product, { tone, quantity = 1 } = {}) => {
      const lineKey = `${product.id}__${tone || 'Gold'}`
      setItems((current) => {
        const existing = current.find((i) => i.key === lineKey)
        let next
        if (existing) {
          next = current.map((i) =>
            i.key === lineKey ? { ...i, quantity: i.quantity + quantity } : i
          )
        } else {
          next = [
            ...current,
            {
              key: lineKey,
              id: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              tone: tone || 'Gold',
              quantity,
            },
          ]
        }
        persist(next)
        return next
      })
      setIsOpen(true)
    },
    [persist]
  )

  const removeItem = useCallback(
    (key) => {
      setItems((current) => {
        const next = current.filter((i) => i.key !== key)
        persist(next)
        return next
      })
    },
    [persist]
  )

  const updateQuantity = useCallback(
    (key, quantity) => {
      setItems((current) => {
        const next = current
          .map((i) => (i.key === key ? { ...i, quantity: Math.max(1, quantity) } : i))
          .filter((i) => i.quantity > 0)
        persist(next)
        return next
      })
    },
    [persist]
  )

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
    }),
    [items, count, subtotal, isOpen, addItem, removeItem, updateQuantity, openCart, closeCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
