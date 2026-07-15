import { createContext, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart"

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const addItem = (product, { variant = "Gold", quantity = 1 } = {}) => {
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
          titleId: product.titleId,
          descId: product.descId,
          subtitle: product.subtitle,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (lineId) => {
    setItems((prev) => prev.filter((i) => i.lineId !== lineId))
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      removeItem(lineId)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.lineId === lineId ? { ...i, quantity } : i))
    )
  }

  const clearCart = () => setItems([])

  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  )

  const value = {
    items,
    isOpen,
    setIsOpen,
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
