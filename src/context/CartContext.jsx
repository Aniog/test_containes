import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const getInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return []
    }

    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const getProductById = (productId) => products.find((product) => product.id === productId)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined
    }

    const { body } = document
    const previousOverflow = body.style.overflow

    body.style.overflow = isCartOpen ? 'hidden' : previousOverflow || ''

    return () => {
      body.style.overflow = previousOverflow
    }
  }, [isCartOpen])

  const addItem = (product, tone = 'Gold', quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productId === product.id && item.tone === tone,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          productId: product.id,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (productId, tone) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.tone === tone),
      ),
    )
  }

  const updateQuantity = (productId, tone, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(productId, tone)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.tone === tone
          ? { ...item, quantity: nextQuantity }
          : item,
      ),
    )
  }

  const clearCart = () => setItems([])

  const cartItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductById(item.productId)
          if (!product) {
            return null
          }

          return {
            ...item,
            product,
            lineTotal: product.price * item.quantity,
          }
        })
        .filter(Boolean),
    [items],
  )

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.lineTotal, 0),
    [cartItems],
  )

  const value = {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
