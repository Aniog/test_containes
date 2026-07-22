import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react"
import { resolveImgUrl } from "@/lib/utils"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

function loadInitial() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    // Backfill imgUrl for items persisted before this field existed.
    return parsed.map((i) =>
      i.imgUrl ? i : { ...i, imgUrl: resolveImgUrl(i.imgId) }
    )
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
      // ignore
    }
  }, [items])

  const addItem = useCallback((product, { variant = "Gold", quantity = 1 } = {}) => {
    const lineId = `${product.id}__${variant}`
    setItems((prev) => {
      const existing = prev.find((i) => i.lineId === lineId)
      if (existing) {
        return prev.map((i) =>
          i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...prev,
        {
          lineId,
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imgId: product.imgId,
          imgUrl: resolveImgUrl(product.imgId),
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((prev) => prev.filter((i) => i.lineId !== lineId))
  }, [])

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((prev) =>
      prev
        .map((i) => (i.lineId === lineId ? { ...i, quantity: Math.max(0, quantity) } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const count = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items])

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
    }),
    [items, count, subtotal, isOpen, addItem, removeItem, updateQuantity, openCart, closeCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
