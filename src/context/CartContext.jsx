import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { PRODUCTS } from '../data/products'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((productId, { tone, quantity = 1 } = {}) => {
    const product = PRODUCTS.find((p) => p.id === productId)
    if (!product) return
    const lineTone = tone || product.tones[0]
    const key = `${productId}__${lineTone}`
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
          productId,
          tone: lineTone,
          quantity,
          name: product.name,
          price: product.price,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
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
