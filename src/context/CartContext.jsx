import React, { createContext, useContext, useState, useCallback, useMemo } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart"

function loadInitialCart() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart)
  const [isOpen, setIsOpen] = useState(false)

  // Persist to localStorage whenever items change
  React.useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, { tone = "gold", quantity = 1 } = {}) => {
    const lineId = `${product.id}__${tone}`
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
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imageId: product.images?.[0]?.id,
          imageAlt: product.images?.[0]?.alt,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((i) => i.lineId !== lineId))
  }, [])

  const updateQuantity = useCallback((lineId, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((i) => i.lineId !== lineId))
      return
    }
    setItems((current) =>
      current.map((i) => (i.lineId === lineId ? { ...i, quantity } : i))
    )
  }, [])

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  )
  const count = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      subtotal,
      count,
    }),
    [items, isOpen, openCart, closeCart, addItem, removeItem, updateQuantity, subtotal, count]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
