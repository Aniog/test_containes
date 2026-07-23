import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const readCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(readCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.slug === product.slug && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.slug === product.slug && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          slug: product.slug,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          variant,
          quantity,
          imageIds: product.imageIds,
          query: product.query,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (slug, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.slug === slug && item.variant === variant)),
    )
  }

  const updateQuantity = (slug, variant, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(slug, variant)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.slug === slug && item.variant === variant
          ? { ...item, quantity: nextQuantity }
          : item,
      ),
    )
  }

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      setIsCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      itemCount,
      subtotal,
    }),
    [isCartOpen, itemCount, items, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
