import React, { createContext, useContext, useMemo, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((product, options = {}) => {
    const { tone = 'gold', quantity = 1 } = options
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
          image: product.images[0],
          imgId: product.imgId,
          titleId: product.titleId,
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
      removeFromCart(cartItemId)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, itemCount }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, addToCart, removeFromCart, updateQuantity, clearCart, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
