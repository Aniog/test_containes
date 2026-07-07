import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react"
import { getProductById } from "@/data/products"

const CartContext = createContext(null)
const STORAGE_KEY = "velmora.cart.v1"

const loadInitial = () => {
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

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore quota / privacy errors */
    }
  }, [items])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const addToCart = useCallback((productId, qty = 1) => {
    const product = getProductById(productId)
    if (!product) return
    setItems((current) => {
      const existing = current.find((i) => i.productId === productId)
      if (existing) {
        return current.map((i) =>
          i.productId === productId ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [
        ...current,
        {
          productId,
          qty,
          // snapshot the live product data so the cart stays correct
          // even if the catalog is edited later
          name: product.name,
          price: product.price,
          image: product.image,
          material: product.material,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((productId) => {
    setItems((current) => current.filter((i) => i.productId !== productId))
  }, [])

  const updateQty = useCallback((productId, qty) => {
    setItems((current) =>
      current
        .map((i) => (i.productId === productId ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart  = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const summary = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0)
    return { count, subtotal }
  }, [items])

  const value = {
    items,
    summary,
    isOpen,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
