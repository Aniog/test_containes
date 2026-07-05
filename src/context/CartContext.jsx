import { createContext, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

const readStored = () => {
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
  const [items, setItems] = useState(readStored)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const addItem = (product, { tone = null, quantity = 1 } = {}) => {
    const chosenTone = tone || product.tones?.[0] || "Gold"
    const key = `${product.id}::${chosenTone}`
    setItems((current) => {
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...current,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          tone: chosenTone,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
          tagline: product.tagline,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }
    setItems((current) =>
      current.map((i) => (i.key === key ? { ...i, quantity } : i))
    )
  }

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity * i.price, 0),
    [items]
  )

  const value = {
    items,
    count,
    subtotal,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
