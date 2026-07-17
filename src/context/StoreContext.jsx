import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/products'

const StoreContext = createContext(null)

function getInitialCart() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const savedCart = window.localStorage.getItem('velmora-cart')
    return savedCart ? JSON.parse(savedCart) : []
  } catch {
    return []
  }
}

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.localStorage.setItem('velmora-cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, tone = 'Gold', quantity = 1) => {
    setCartItems((currentItems) => {
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
          id: `${product.id}-${tone}`,
          productId: product.id,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (itemId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId),
    )
  }

  const updateQuantity = (itemId, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const clearCart = () => setCartItems([])

  const detailedCartItems = useMemo(
    () =>
      cartItems
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
    [cartItems],
  )

  const cartCount = useMemo(
    () => detailedCartItems.reduce((total, item) => total + item.quantity, 0),
    [detailedCartItems],
  )

  const cartSubtotal = useMemo(
    () => detailedCartItems.reduce((total, item) => total + item.lineTotal, 0),
    [detailedCartItems],
  )

  const value = useMemo(
    () => ({
      products,
      cartItems: detailedCartItems,
      cartCount,
      cartSubtotal,
      isCartOpen,
      searchQuery,
      setSearchQuery,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [cartCount, cartSubtotal, detailedCartItems, isCartOpen, searchQuery],
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
