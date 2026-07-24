import { createContext, useContext, useState, useCallback, useMemo } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addToCart = useCallback((product, variant = product.variants[0], qty = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.variant === variant
      )
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + qty }
            : item
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity: qty,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((productId, variant) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.variant === variant))
    )
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    return { count, subtotal }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, addToCart, removeFromCart, updateQuantity, clearCart, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
