import { createContext, useEffect, useMemo, useState } from 'react'
import { getProductBySlug } from '@/data/storefront'

const STORAGE_KEY = 'velmora-cart'

export const CartContext = createContext(null)

const getInitialItems = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const savedCart = window.localStorage.getItem(STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  } catch {
    return []
  }
}

const createLineId = (slug, tone) => `${slug}-${tone.toLowerCase().replace(/\s+/g, '-')}`

export function CartProvider({ children }) {
  const [items, setItems] = useState(getInitialItems)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const cartItems = useMemo(
    () =>
      items
        .map((item) => ({
          ...item,
          product: getProductBySlug(item.slug),
        }))
        .filter((item) => item.product),
    [items],
  )

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [cartItems],
  )

  const addItem = (product, tone = product.tones[0], quantity = 1) => {
    const lineId = createLineId(product.slug, tone)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          lineId,
          slug: product.slug,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.lineId !== lineId),
      )
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (lineId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.lineId !== lineId),
    )
  }

  const toggleCart = (nextState) => {
    setIsCartOpen((currentState) =>
      typeof nextState === 'boolean' ? nextState : !currentState,
    )
  }

  const value = {
    items: cartItems,
    itemCount,
    subtotal,
    isCartOpen,
    addItem,
    updateQuantity,
    removeItem,
    toggleCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
