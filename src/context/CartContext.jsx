import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

function loadInitial() {
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
      // ignore
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, { variant, quantity = 1 } = {}) => {
    const lineId = `${product.id}__${variant || "default"}`
    setItems((current) => {
      const existing = current.find((line) => line.id === lineId)
      if (existing) {
        return current.map((line) =>
          line.id === lineId
            ? { ...line, quantity: line.quantity + quantity }
            : line
        )
      }
      return [
        ...current,
        {
          id: lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant: variant || null,
          quantity,
          titleId: product.titleId,
          descId: product.descId,
          imgId: product.images?.[0]?.imgId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) =>
      current
        .map((line) =>
          line.id === lineId ? { ...line, quantity: Math.max(0, quantity) } : line
        )
        .filter((line) => line.quantity > 0)
    )
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((line) => line.id !== lineId))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const count = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items]
  )
  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity * line.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [items, count, subtotal, isOpen, openCart, closeCart, addItem, updateQuantity, removeItem, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
