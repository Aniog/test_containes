import React, { createContext, useContext, useState, useCallback, useMemo } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addToCart = useCallback((product, options = {}) => {
    const { tone = product.tone?.[0] || "Gold", quantity = 1 } = options

    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.tone === tone
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [
        ...current,
        {
          cartItemId: `${product.id}-${tone}-${Date.now()}`,
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          image: product.images[tone]?.[0] || product.images[product.tone?.[0]]?.[0],
        },
      ]
    })

    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((cartItemId) => {
    setItems((current) => current.filter((item) => item.cartItemId !== cartItemId))
  }, [])

  const updateQuantity = useCallback((cartItemId, quantity) => {
    if (quantity < 1) {
      setItems((current) => current.filter((item) => item.cartItemId !== cartItemId))
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5
    return { subtotal, itemCount, shipping, total: subtotal + shipping }
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
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
