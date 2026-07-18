import { createContext, useContext, useEffect, useMemo, useState } from "react"

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
// `key` uniquely identifies a line (product + tone) so the same product in two
// tones can coexist.

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

  const addItem = (line) => {
    const key = `${line.productId}::${line.tone || "default"}`
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + (line.qty || 1) } : i
        )
      }
      return [...prev, { ...line, key, qty: line.qty || 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  const updateQty = (key, qty) => {
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  )
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      updateQty,
      openCart,
      closeCart,
    }),
    [items, count, subtotal, isOpen]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
