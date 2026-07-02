import React from 'react'
import { productLookup } from '@/data/products'

const CartContext = React.createContext(null)
const STORAGE_KEY = 'velmora-cart'

const readCart = () => {
  if (typeof window === 'undefined') return []

  try {
    const savedCart = window.localStorage.getItem(STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = React.useState(readCart)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const openCart = React.useCallback(() => setIsOpen(true), [])
  const closeCart = React.useCallback(() => setIsOpen(false), [])

  const addItem = React.useCallback((product, options = {}) => {
    const variant = options.variant || product.variants?.[0] || 'Gold Tone'
    const quantity = Math.max(1, Number(options.quantity) || 1)

    setItems((currentItems) => {
      const matchIndex = currentItems.findIndex(
        (item) => item.productId === product.id && item.variant === variant,
      )

      if (matchIndex === -1) {
        return [...currentItems, { productId: product.id, variant, quantity }]
      }

      return currentItems.map((item, index) =>
        index === matchIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      )
    })

    setIsOpen(true)
  }, [])

  const updateQuantity = React.useCallback((productId, variant, quantity) => {
    const safeQuantity = Math.max(1, quantity)

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity: safeQuantity }
          : item,
      ),
    )
  }, [])

  const removeItem = React.useCallback((productId, variant) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(item.productId === productId && item.variant === variant),
      ),
    )
  }, [])

  const itemCount = React.useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = React.useMemo(
    () =>
      items.reduce((total, item) => {
        const product = productLookup[item.productId]
        return total + (product?.price || 0) * item.quantity
      }, 0),
    [items],
  )

  const value = React.useMemo(
    () => ({
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
    }),
    [
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = React.useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
