import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

const productById = products.reduce((acc, p) => {
  acc[p.id] = p
  return acc
}, {})

// Backfill missing fields (imgId, slug, etc.) on cart items loaded from
// localStorage so older items created before those fields existed still
// render correctly (e.g. cart drawer thumbnails).
function normalizeItem(item) {
  if (!item) return null
  const product = productById[item.productId] || productById[item.slug]
  if (!product) return item
  return {
    ...item,
    slug: item.slug || product.slug,
    name: item.name || product.name,
    price: item.price ?? product.price,
    imgId: item.imgId || product.imgId,
    titleId: item.titleId || product.titleId,
    descId: item.descId || product.descId,
  }
}

function loadInitial() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.map(normalizeItem).filter(Boolean)
  } catch {
    return []
  }
}

// A cart line is uniquely identified by product id + chosen variant tone.
function lineKey(productId, variant) {
  return `${productId}__${variant}`
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

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, { variant, quantity = 1 } = {}) => {
    const tone = variant || product.variants?.[0] || 'Gold'
    const qty = Math.max(1, Number(quantity) || 1)
    setItems((current) => {
      const key = lineKey(product.id, tone)
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + qty } : i
        )
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity: qty,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    const qty = Math.max(1, Number(quantity) || 1)
    setItems((current) =>
      current.map((i) => (i.key === key ? { ...i, quantity: qty } : i))
    )
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
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
      updateQuantity,
      removeItem,
      subtotal,
      count,
    }),
    [items, isOpen, openCart, closeCart, addItem, updateQuantity, removeItem, subtotal, count]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
