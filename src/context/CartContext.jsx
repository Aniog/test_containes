import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

// A cart line is keyed by product id + tone so different finishes are separate lines.
const lineKey = (productId, tone) => `${productId}__${tone}`

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [lastAdded, setLastAdded] = useState(null)

  // Hydrate from localStorage once.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setItems(parsed)
      }
    } catch (e) {
      console.warn('Cart hydrate failed', e)
    }
  }, [])

  // Persist on change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.warn('Cart persist failed', e)
    }
  }, [items])

  const addItem = useCallback((product, { tone, quantity = 1 } = {}) => {
    const chosenTone = tone || product.tones?.[0] || 'Gold'
    const key = lineKey(product.id, chosenTone)
    setItems((current) => {
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
          name: product.name,
          price: product.price,
          tone: chosenTone,
          quantity,
          titleId: product.titleId,
          descId: product.descId,
          imgId: product.imgId,
        },
      ]
    })
    setLastAdded({ name: product.name, tone: chosenTone, at: Date.now() })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      current
        .map((i) => (i.key === key ? { ...i, quantity: Math.max(0, quantity) } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity * i.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      lastAdded,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    }),
    [items, count, subtotal, isOpen, lastAdded, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
