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
// key = productId + tone (a variant is a separate line)

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
    const key = `${product.id}__${tone}`
    setItems((current) => {
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone,
          qty,
          imgId: product.imgId,
          imgQ: product.imgQ,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const updateQty = useCallback((key, qty) => {
    setItems((current) =>
      current
        .map((i) => (i.key === key ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((n, i) => n + i.qty * i.price, 0),
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
      updateQty,
      removeItem,
      clearCart,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, updateQty, removeItem, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
