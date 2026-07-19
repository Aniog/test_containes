import { createContext, useContext, useMemo, useState, useCallback } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, { variant = "Gold", quantity = 1 } = {}) => {
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
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((prev) => prev.filter((i) => i.id !== lineId))
  }, [])

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === lineId ? { ...i, quantity: Math.max(0, quantity) } : i))
        .filter((i) => i.quantity > 0)
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
      items, isOpen, openCart, closeCart,
      addItem, removeItem, updateQuantity, subtotal, count,
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
