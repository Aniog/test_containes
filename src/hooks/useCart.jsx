import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)
const STORAGE_KEY = "velmora.cart.v1"

function readStorage() {
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

function writeStorage(items) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // ignore
  }
}

function makeLineId(productId, tone) {
  return `${productId}__${tone || "default"}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    writeStorage(items)
  }, [items])

  const addItem = useCallback((product, { tone, quantity = 1 } = {}) => {
    setItems((current) => {
      const lineId = makeLineId(product.id, tone)
      const existing = current.find((line) => line.id === lineId)
      if (existing) {
        return current.map((line) =>
          line.id === lineId ? { ...line, quantity: line.quantity + quantity } : line
        )
      }
      return [
        ...current,
        {
          id: lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone: tone || product.tone || "gold",
          image: product.gallery?.[0] || product.image || "",
          quantity: Math.max(1, quantity),
        },
      ]
    })
  }, [])

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((line) => line.id !== lineId)
      return current.map((line) => (line.id === lineId ? { ...line, quantity } : line))
    })
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((line) => line.id !== lineId))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const value = useMemo(() => {
    const count = items.reduce((acc, line) => acc + line.quantity, 0)
    const subtotal = items.reduce((acc, line) => acc + line.quantity * line.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      addItem,
      updateQuantity,
      removeItem,
      clear,
      openCart,
      closeCart,
      toggleCart,
    }
  }, [items, isOpen, addItem, updateQuantity, removeItem, clear, openCart, closeCart, toggleCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
