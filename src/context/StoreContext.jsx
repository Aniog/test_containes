import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProductCardImage } from '@/data/imagePlaceholders'

const StoreContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function readStoredCart() {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity = 1, variant = 'Gold Tone') => {
    setCartItems((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          productId: product.id,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          image: getProductCardImage(product.id, 'primary'),
          category: product.category,
          variant,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (productId, variant, quantity) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) =>
      current.filter(
        (item) => item.productId !== productId || item.variant !== variant,
      ),
    )
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      addToCart,
      cartCount,
      cartItems,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      removeFromCart,
      subtotal,
      updateQuantity,
    }),
    [cartCount, cartItems, isCartOpen, subtotal],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
