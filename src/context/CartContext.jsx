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

  // Persist to localStorage whenever items change.
  React.useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage errors
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  // lineKey uniquely identifies a cart line: product + variant.
  const lineKey = (productId, variant) => `${productId}__${variant || 'default'}`

  const addItem = useCallback((product, { variant, quantity = 1 } = {}) => {
    const v = variant || product.variants?.[0] || 'Gold'
    const key = lineKey(product.id, v)
    setItems((current) => {
      const existing = current.find((it) => it.key === key)
      if (existing) {
        return current.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + quantity } : it,
        )
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          variant: v,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((it) => it.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      current
        .map((it) =>
          it.key === key ? { ...it, quantity: Math.max(0, quantity) } : it,
        )
        .filter((it) => it.quantity > 0),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [items],
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
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
