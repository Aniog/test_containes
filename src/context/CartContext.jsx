import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function loadInitial() {
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

  // Persist to localStorage whenever items change
  React.useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, { variant = 'Gold', quantity = 1 } = {}) => {
    const lineId = `${product.id}__${variant}`
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
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
          shortDesc: product.shortDesc,
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
        .map((i) => (i.lineId === lineId ? { ...i, quantity: Math.max(1, quantity) } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])

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
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
