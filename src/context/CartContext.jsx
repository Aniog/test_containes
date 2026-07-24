import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

function loadInitialCart() {
  if (typeof window === 'undefined') return []
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore storage errors
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addToCart = useCallback((product, variant = product.variants[0], quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === variant
      )
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...current,
        {
          cartItemId: `${product.id}-${variant}-${Date.now()}`,
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageQuery: product.imageQuery,
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

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  )

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
      totalItems,
      subtotal,
    }),
    [items, isOpen, openCart, closeCart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal]
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
