import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora.cart.v1'

function readStorage() {
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

function writeStorage(items) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    /* storage full or disabled */
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStorage)
  const [isOpen, setIsOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(null)

  useEffect(() => {
    writeStorage(items)
  }, [items])

  const openCart = useCallback(() => {
    setIsOpen(true)
  }, [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((productId, toneId, quantity = 1) => {
    const product = products.find((p) => p.id === productId)
    if (!product) return
    const tone = toneId || product.defaultTone
    setItems((current) => {
      const key = `${productId}::${tone}`
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
          productId,
          tone,
          quantity,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          imgId: product.imgId,
        },
      ]
    })
    setJustAdded(`${productId}::${tone}`)
    setIsOpen(true)
    window.setTimeout(() => setJustAdded(null), 1600)
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((it) => it.key !== key)
      return current.map((it) => (it.key === key ? { ...it, quantity } : it))
    })
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((it) => it.key !== key))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const count = items.reduce((sum, it) => sum + it.quantity, 0)
    const subtotal = items.reduce((sum, it) => sum + it.quantity * it.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      justAdded,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }
  }, [items, isOpen, justAdded, openCart, closeCart, toggleCart, addItem, updateQuantity, removeItem, clearCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
