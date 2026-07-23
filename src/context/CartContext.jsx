import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { productById } from "@/data/products"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora:cart:v1"

const initialState = () => {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(initialState)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const addItem = (productId, variantId, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.productId === productId && i.variantId === variantId
      )
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return next
      }
      return [...prev, { productId, variantId, qty }]
    })
    setIsOpen(true)
  }

  const removeItem = (productId, variantId) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && i.variantId === variantId)
      )
    )
  }

  const setQty = (productId, variantId, qty) => {
    if (qty <= 0) {
      removeItem(productId, variantId)
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.variantId === variantId
          ? { ...i, qty }
          : i
      )
    )
  }

  const clear = () => setItems([])

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((v) => !v)

  const summary = useMemo(() => {
    let count = 0
    let subtotal = 0
    for (const i of items) {
      const p = productById(i.productId)
      if (!p) continue
      count += i.qty
      subtotal += p.price * i.qty
    }
    return { count, subtotal }
  }, [items])

  const value = {
    items,
    addItem,
    removeItem,
    setQty,
    clear,
    isOpen,
    open,
    close,
    toggle,
    summary,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
