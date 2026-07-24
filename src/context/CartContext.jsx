import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { getProductById } from '@/data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = useCallback((message) => {
    setToast({ id: Date.now(), message })
  }, [])

  const addItem = useCallback((productId, variant = 'gold', quantity = 1) => {
    setItems((current) => {
      const key = `${productId}__${variant}`
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, quantity: Math.min(i.quantity + quantity, 99) } : i,
        )
      }
      return [...current, { key, productId, variant, quantity }]
    })
    const product = getProductById(productId)
    showToast(`${product?.name ?? 'Item'} added to bag`)
  }, [showToast])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, delta) => {
    setItems((current) =>
      current
        .map((i) =>
          i.key === key ? { ...i, quantity: Math.max(0, Math.min(99, i.quantity + delta)) } : i,
        )
        .filter((i) => i.quantity > 0),
    )
  }, [])

  const openCart = useCallback(() => setIsCartOpen(true), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])

  const value = useMemo(() => {
    const detailed = items.map((i) => ({ ...i, product: getProductById(i.productId) }))
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = detailed.reduce((sum, i) => sum + (i.product?.price ?? 0) * i.quantity, 0)
    return {
      items: detailed,
      count,
      subtotal,
      isCartOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      toast,
      dismissToast: () => setToast(null),
    }
  }, [items, isCartOpen, openCart, closeCart, addItem, removeItem, updateQuantity, toast])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
