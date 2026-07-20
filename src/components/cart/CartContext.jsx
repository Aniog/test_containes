import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getKey = (product, tone) => `${product.slug}-${tone}`

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = window.localStorage.getItem('velmora-cart')
    return saved ? JSON.parse(saved) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const addItem = (product, quantity = 1, tone = 'Gold') => {
    const key = getKey(product, tone)
    setItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...current,
        {
          key,
          slug: product.slug,
          name: product.name,
          price: product.price,
          category: product.category,
          tone,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const removeItem = (key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    const safeQuantity = Math.max(1, Number(quantity) || 1)
    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity: safeQuantity } : item)),
    )
  }

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const count = items.reduce((total, item) => total + item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      subtotal,
      count,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [items, subtotal, count, isCartOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
