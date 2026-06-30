import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const getInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  const savedCart = window.localStorage.getItem(STORAGE_KEY)

  if (!savedCart) {
    return []
  }

  try {
    const parsedCart = JSON.parse(savedCart)
    return Array.isArray(parsedCart) ? parsedCart : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, tone = 'Gold Tone', quantity = 1) => {
    setItems((currentItems) => {
      const itemId = `${product.slug}-${tone.toLowerCase().replace(/\s+/g, '-')}`
      const existingItem = currentItems.find((item) => item.id === itemId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: itemId,
          productId: product.id,
          slug: product.slug,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (itemId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId),
    )
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      ),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((current) => !current)

  const enrichedItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId)

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

  const subtotal = enrichedItems.reduce(
    (total, item) => total + item.lineTotal,
    0,
  )
  const itemCount = enrichedItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      items: enrichedItems,
      subtotal,
      itemCount,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
      toggleCart,
    }),
    [enrichedItems, subtotal, itemCount, isCartOpen],
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
