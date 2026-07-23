import { createContext, useContext, useMemo, useState, useCallback, useEffect } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === "undefined") return []
    try {
      const raw = localStorage.getItem("velmora_cart")
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem("velmora_cart", JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product, quantity = 1, variant = "gold") => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.variant === variant
      )
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
          imgId: product.imgId,
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
      prev.map((i) =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const shipping = subtotal >= 50 ? 0 : 6
    return { subtotal, count, shipping, total: subtotal + shipping }
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
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
