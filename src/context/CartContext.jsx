import { createContext, useContext, useEffect, useMemo, useState } from "react"

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

  const addItem = (product, { color, quantity = 1 } = {}) => {
    const lineKey = `${product.id}__${color || "default"}`
    setItems((prev) => {
      const existing = prev.find((i) => i.key === lineKey)
      if (existing) {
        return prev.map((i) =>
          i.key === lineKey ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...prev,
        {
          key: lineKey,
          id: product.id,
          name: product.name,
          price: product.price,
          color: color || product.colors?.[0] || "Gold",
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, quantity } : i))
    )
  }

  const clearCart = () => setItems([])

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => {
        acc.count += i.quantity
        acc.subtotal += i.quantity * i.price
        return acc
      },
      { count: 0, subtotal: 0 }
    )
  }, [items])

  const value = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    count,
    subtotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
