import React, { createContext, useContext, useMemo, useState, useEffect, useCallback } from "react"

const CartContext = createContext(undefined)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === "undefined") return []
    try {
      return JSON.parse(localStorage.getItem("velmora-cart")) || []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("velmora-cart", JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id && i.variant === variant)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, variant) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.variant === variant)))
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity < 1) {
      removeItem(id, variant)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.id === id && i.variant === variant ? { ...i, quantity } : i))
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
    return { subtotal, itemCount }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, addItem, removeItem, updateQuantity, clearCart, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
