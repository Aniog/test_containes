import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '@/data/products'

const StoreContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function getInitialCart() {
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

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (productId, tone = 'Gold', quantity = 1) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.productId === productId && item.tone === tone,
      )

      if (existing) {
        return current.map((item) =>
          item.productId === productId && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { productId, tone, quantity }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (productId, tone, quantity) => {
    setCart((current) =>
      current
        .map((item) =>
          item.productId === productId && item.tone === tone
            ? { ...item, quantity }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId, tone) => {
    setCart((current) =>
      current.filter(
        (item) => !(item.productId === productId && item.tone === tone),
      ),
    )
  }

  const value = useMemo(() => {
    const items = cart
      .map((entry) => {
        const product = products.find((item) => item.id === entry.productId)
        if (!product) {
          return null
        }

        return {
          ...entry,
          product,
          lineTotal: product.price * entry.quantity,
        }
      })
      .filter(Boolean)

    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.lineTotal, 0)

    return {
      cart: items,
      itemCount,
      subtotal,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
    }
  }, [cart, isCartOpen])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
