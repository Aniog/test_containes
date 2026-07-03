import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

function loadInitial() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// A cart line: { key, productId, name, price, tone, qty, imgId, titleId, descId }
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

  const addItem = useCallback((product, { tone = "gold", qty = 1 } = {}) => {
    const key = `${product.id}-${tone}`
    setItems((current) => {
      const existing = current.find((line) => line.key === key)
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line
        )
      }
      const img = product.images?.[0] || {}
      return [
        ...current,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone,
          qty,
          imgId: img.imgId,
          titleId: img.titleId,
          descId: img.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((line) => line.key !== key))
  }, [])

  const updateQty = useCallback((key, qty) => {
    setItems((current) =>
      current
        .map((line) => (line.key === key ? { ...line, qty: Math.max(0, qty) } : line))
        .filter((line) => line.qty > 0)
    )
  }, [])

  const count = useMemo(() => items.reduce((sum, line) => sum + line.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.qty, 0),
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
      removeItem,
      updateQty,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, removeItem, updateQty]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
