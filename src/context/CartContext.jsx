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
      const existing = prev.find((i) => i.id === lineId)
      if (existing) {
        return prev.map((i) =>
          i.id === lineId ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...prev,
        {
          id: lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imgId: product.imgId,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (lineId) => {
    setItems((prev) => prev.filter((i) => i.id !== lineId))
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      removeItem(lineId)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.id === lineId ? { ...i, quantity } : i))
    )
  }

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
    count,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
