import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart"

function loadInitial() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

// A cart line is { id, name, price, material, tone, imgId, qty }
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

  const add = React.useCallback((product, { tone = "Gold", qty = 1 } = {}) => {
    const lineId = `${product.id}__${tone}`
    setItems((current) => {
      const existing = current.find((i) => i.id === lineId)
      if (existing) {
        return current.map((i) =>
          i.id === lineId ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [
        ...current,
        {
          id: lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          material: product.material,
          tone,
          imgId: product.imgId,
          qty,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const remove = React.useCallback((lineId) => {
    setItems((current) => current.filter((i) => i.id !== lineId))
  }, [])

  const setQty = React.useCallback((lineId, qty) => {
    setItems((current) =>
      current
        .map((i) => (i.id === lineId ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }, [])

  const open = React.useCallback(() => setIsOpen(true), [])
  const close = React.useCallback(() => setIsOpen(false), [])

  const count = useMemo(() => items.reduce((n, i) => n + i.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((n, i) => n + i.qty * i.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({ items, add, remove, setQty, isOpen, open, close, count, subtotal }),
    [items, add, remove, setQty, isOpen, open, close, count, subtotal]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
