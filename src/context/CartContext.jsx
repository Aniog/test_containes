import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProductBySlug } from '@/data/store'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const getItemKey = (slug, tone) => `${slug}-${tone.toLowerCase().replace(/\s+/g, '-')}`

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const savedCart = window.localStorage.getItem(STORAGE_KEY)

    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, tone, quantity = 1) => {
    const key = getItemKey(product.slug, tone)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          key,
          slug: product.slug,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.key !== key))
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === key ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const cartItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductBySlug(item.slug)

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
    itemCount,
    subtotal,
    isCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
