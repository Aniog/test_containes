import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { toast } from 'sonner'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback(
    (product, options = {}) => {
      const { tone = product.tone || 'gold', quantity = 1 } = options
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
            slug: product.slug,
            name: product.name,
            price: product.price,
            tone,
            quantity,
          },
        ]
      })
      toast.success(`${product.name} added to your bag`)
      setIsOpen(true)
    },
    []
  )

  const removeItem = useCallback((cartItemId) => {
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

  const value = useMemo(
    () => ({
      items,
      isOpen,
      totalItems,
      subtotal,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      isOpen,
      totalItems,
      subtotal,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ]
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
