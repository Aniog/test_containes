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

// A cart line is uniquely identified by product id + chosen variant.
function lineKey(productId, variant) {
  return `${productId}::${variant}`
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
    const chosenVariant = variant || product.variants?.[0] || 'Gold'
    setItems((current) => {
      const key = lineKey(product.id, chosenVariant)
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          variant: chosenVariant,
          quantity,
          titleId: product.titleId,
          imgId: product.images?.[0]?.imgId,
          imgTitleId: product.images?.[0]?.titleId,
          imgDescId: product.images?.[0]?.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      current
        .map((i) => (i.key === key ? { ...i, quantity: Math.max(1, quantity) } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  )
  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      subtotal,
      count,
    }),
    [items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, subtotal, count]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
