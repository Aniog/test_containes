import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProductBySlug } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const readCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = ({ slug, variant, quantity = 1 }) => {
    setItems((currentItems) => {
      const existingIndex = currentItems.findIndex(
        (item) => item.slug === slug && item.variant === variant,
      )

      if (existingIndex >= 0) {
        return currentItems.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { slug, variant, quantity }]
    })
    setIsCartOpen(true)
  }

  const updateItemQuantity = (slug, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(slug, variant)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.slug === slug && item.variant === variant
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const removeItem = (slug, variant) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.slug === slug && item.variant === variant),
      ),
    )
  }

  const detailedItems = useMemo(
    () =>
      items
        .map((item) => ({
          ...item,
          product: getProductBySlug(item.slug),
        }))
        .filter((item) => item.product),
    [items],
  )

  const cartCount = detailedItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const subtotal = detailedItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      items: detailedItems,
      isCartOpen,
      cartCount,
      subtotal,
      addItem,
      removeItem,
      updateItemQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [cartCount, detailedItems, isCartOpen, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
