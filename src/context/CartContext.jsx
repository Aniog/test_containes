import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

const loadInitial = () => {
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

  const persist = useCallback((next) => {
    setItems((current) => {
      const value = typeof next === 'function' ? next(current) : next
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
      } catch {
        // ignore persistence errors
      }
      return value
    })
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback(
    (product, { variant, quantity = 1 } = {}) => {
      const lineId = `${product.id}__${variant || 'default'}`
      persist((current) => {
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
            slug: product.slug,
            name: product.name,
            price: product.price,
            variant: variant || null,
            quantity,
            imgId: product.images?.[0]?.imgId,
            titleId: product.images?.[0]?.titleId,
            descId: product.images?.[0]?.descId,
          },
        ]
      })
      setIsOpen(true)
    },
    [persist]
  )

  const updateQuantity = useCallback(
    (lineId, quantity) => {
      persist((current) =>
        current
          .map((i) => (i.lineId === lineId ? { ...i, quantity } : i))
          .filter((i) => i.quantity > 0)
      )
    },
    [persist]
  )

  const removeItem = useCallback(
    (lineId) => {
      persist((current) => current.filter((i) => i.lineId !== lineId))
    },
    [persist]
  )

  const clearCart = useCallback(() => persist([]), [persist])

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
