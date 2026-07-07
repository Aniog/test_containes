import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart"

function loadInitialCart() {
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
  const [items, setItems] = useState(loadInitialCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore persistence errors
    }
  }, [items])

  const addItem = (product, { tone, quantity = 1 } = {}) => {
    const lineId = `${product.id}__${tone || product.tones[0]}`
    setItems((current) => {
      const existing = current.find((i) => i.lineId === lineId)
      if (existing) {
        return current.map((i) =>
          i.lineId === lineId ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...current,
        {
          lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone: tone || product.tones[0],
          quantity,
          imgId: product.cartImgId || product.imgId || `product-${product.id}-cart`,
          titleId: `cart-${product.id}-title`,
        },
      ]
    })
    setIsOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      removeItem(lineId)
      return
    }
    setItems((current) =>
      current.map((i) => (i.lineId === lineId ? { ...i, quantity } : i))
    )
  }

  const removeItem = (lineId) => {
    setItems((current) => current.filter((i) => i.lineId !== lineId))
  }

  const clearCart = () => setItems([])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

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
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
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
