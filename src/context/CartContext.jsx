import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

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

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore persistence errors
    }
  }, [items])

  // Lock body scroll when drawer open
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  const lineKey = (item) => `${item.slug}::${item.variant}`

  const addItem = useCallback((product, { variant, quantity = 1 } = {}) => {
    const chosenVariant = variant || product.variants?.[0] || 'Gold'
    setItems((current) => {
      const key = lineKey({ slug: product.slug, variant: chosenVariant })
      const existing = current.find((i) => lineKey(i) === key)
      if (existing) {
        return current.map((i) =>
          lineKey(i) === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...current,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant: chosenVariant,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((slug, variant) => {
    setItems((current) =>
      current.filter((i) => !(i.slug === slug && i.variant === variant))
    )
  }, [])

  const updateQuantity = useCallback((slug, variant, quantity) => {
    setItems((current) =>
      current
        .map((i) =>
          i.slug === slug && i.variant === variant
            ? { ...i, quantity: Math.max(1, quantity) }
            : i
        )
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )
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
      clearCart,
      openCart,
      closeCart,
    }),
    [items, count, subtotal, isOpen, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
