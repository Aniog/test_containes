import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

// A cart line is keyed by product id + variant, so the same product in two
// tones counts as two separate lines.
const lineKey = (item) => `${item.id}::${item.variant}`

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

  const addItem = useCallback((product, { variant = 'Gold', quantity = 1 } = {}) => {
    setItems((current) => {
      const key = lineKey({ id: product.id, variant })
      const existing = current.find((it) => lineKey(it) === key)
      if (existing) {
        return current.map((it) =>
          lineKey(it) === key ? { ...it, quantity: it.quantity + quantity } : it
        )
      }
      return [
        ...current,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const updateQuantity = useCallback((item, quantity) => {
    setItems((current) =>
      current
        .map((it) => (lineKey(it) === lineKey(item) ? { ...it, quantity } : it))
        .filter((it) => it.quantity > 0)
    )
  }, [])

  const removeItem = useCallback((item) => {
    setItems((current) => current.filter((it) => lineKey(it) !== lineKey(item)))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((sum, it) => sum + it.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
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
