import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProductById } from '@/data/storefront'

const StorefrontContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

export function StorefrontProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const savedCart = window.localStorage.getItem(STORAGE_KEY)

    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
    console.log('Velmora cart updated', cartItems)
  }, [cartItems])

  const addToCart = ({ productId, quantity = 1, tone = 'Gold' }) => {
    const product = getProductById(productId)

    if (!product) {
      throw new Error(`Product not found: ${productId}`)
    }

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productId === productId && item.tone === tone,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          productId,
          quantity,
          tone,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (productId, tone) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.tone === tone),
      ),
    )
  }

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, tone)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const cartSummary = useMemo(() => {
    const enrichedItems = cartItems
      .map((item) => {
        const product = getProductById(item.productId)
        if (!product) {
          return null
        }

        return {
          ...item,
          product,
          total: product.price * item.quantity,
        }
      })
      .filter(Boolean)

    const itemCount = enrichedItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = enrichedItems.reduce((sum, item) => sum + item.total, 0)

    return {
      items: enrichedItems,
      itemCount,
      subtotal,
    }
  }, [cartItems])

  const value = useMemo(
    () => ({
      cartItems: cartSummary.items,
      itemCount: cartSummary.itemCount,
      subtotal: cartSummary.subtotal,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addToCart,
      removeFromCart,
      updateQuantity,
    }),
    [cartSummary, isCartOpen],
  )

  return (
    <StorefrontContext.Provider value={value}>
      {children}
    </StorefrontContext.Provider>
  )
}

export function useStorefront() {
  const context = useContext(StorefrontContext)

  if (!context) {
    throw new Error('useStorefront must be used within StorefrontProvider')
  }

  return context
}
