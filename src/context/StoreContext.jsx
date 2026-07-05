import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '@/data/storeData'

const StoreContext = createContext(null)
const CART_STORAGE_KEY = 'velmora-cart'

const getCartKey = (productId, tone) => `${productId}::${tone}`

export function StoreProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === 'undefined') {
      return []
    }

    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen])

  const catalog = useMemo(() => {
    const byId = Object.fromEntries(products.map((product) => [product.id, product]))
    return { products, byId }
  }, [])

  const cartLineItems = useMemo(
    () =>
      cartItems
        .map((item) => ({
          ...item,
          product: catalog.byId[item.productId],
        }))
        .filter((item) => item.product),
    [cartItems, catalog.byId],
  )

  const itemCount = useMemo(
    () => cartLineItems.reduce((total, item) => total + item.quantity, 0),
    [cartLineItems],
  )

  const subtotal = useMemo(
    () =>
      cartLineItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [cartLineItems],
  )

  const addToCart = (product, quantity = 1, tone = 'Gold Tone') => {
    const cartKey = getCartKey(product.id, tone)

    setCartItems((current) => {
      const existingItem = current.find((item) => item.key === cartKey)

      if (existingItem) {
        return current.map((item) =>
          item.key === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          key: cartKey,
          productId: product.id,
          quantity,
          tone,
        },
      ]
    })

    setCartOpen(true)
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeFromCart(key)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const removeFromCart = (key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }

  const value = {
    products: catalog.products,
    cartOpen,
    setCartOpen,
    cartLineItems,
    itemCount,
    subtotal,
    addToCart,
    updateQuantity,
    removeFromCart,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
