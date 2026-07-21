import { createContext, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

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

  const addItem = (product, { quantity = 1, tone = "Gold" } = {}) => {
    const key = `${product.id}__${tone}`
    setItems((prev) => {
      const existing = prev.find((it) => it.key === key)
      if (existing) {
        return prev.map((it) =>
          it.key === key ? { ...it, quantity: it.quantity + quantity } : it
        )
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          titleId: product.titleId,
          descId: product.descId,
          imgId: product.imgId,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => {
    setItems((prev) => prev.filter((it) => it.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }
    setItems((prev) =>
      prev.map((it) => (it.key === key ? { ...it, quantity } : it))
    )
  }

  const clearCart = () => setItems([])

  const count = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items]
  )
  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [items]
  )

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
