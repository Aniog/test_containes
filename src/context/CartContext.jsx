import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

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

// A cart line is { id, productId, name, price, variant, quantity, imgId, titleId, descId }
// `id` is a composite key so the same product in different variants is a separate line.

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore persistence errors
    }
  }, [items])

  const openCart = React.useCallback(() => setIsOpen(true), [])
  const closeCart = React.useCallback(() => setIsOpen(false), [])

  const addItem = React.useCallback((product, { variant = "Gold", quantity = 1 } = {}) => {
    const lineId = `${product.id}__${variant}`
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
          variant,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = React.useCallback((lineId) => {
    setItems((current) => current.filter((line) => line.id !== lineId))
  }, [])

  const updateQuantity = React.useCallback((lineId, quantity) => {
    setItems((current) =>
      current
        .map((line) =>
          line.id === lineId ? { ...line, quantity: Math.max(1, quantity) } : line
        )
        .filter((line) => line.quantity > 0)
    )
  }, [])

  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [items]
  )

  const count = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
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
