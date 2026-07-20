import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

function makeCartKey() {
  return 'velmora-cart-v1'
}

function loadInitialCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(makeCartKey())
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadInitialCart())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(makeCartKey(), JSON.stringify(items))
    } catch {
      // ignore storage errors
    }
  }, [items])

  const addItem = (product, variantId, quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.variantId === variantId
      )
      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.variantId === variantId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...current,
        {
          productId: product.id,
          variantId,
          name: product.name,
          price: product.price,
          imageQuery: product.imgQuery,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }

  const updateQuantity = (productId, variantId, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter(
          (item) => !(item.productId === productId && item.variantId === variantId)
        )
      }
      return current.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    })
  }

  const removeItem = (productId, variantId) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
      )
    )
  }

  const clearCart = () => setItems([])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, count }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      ...totals,
    }),
    [items, isOpen, totals]
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
