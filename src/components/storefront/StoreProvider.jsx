import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'velmora-cart'
const StoreContext = createContext(null)

const readStoredCart = () => {
  if (typeof window === 'undefined') return []

  try {
    const rawValue = window.localStorage.getItem(CART_STORAGE_KEY)
    return rawValue ? JSON.parse(rawValue) : []
  } catch {
    return []
  }
}

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = (product, variant = product.variants?.[0] || 'Gold Tone', quantity = 1) => {
    const cartKey = `${product.id}-${variant}`

    setCartItems((current) => {
      const existingItem = current.find((item) => item.cartKey === cartKey)

      if (existingItem) {
        return current.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          cartKey,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          type: product.type,
          imageKey: product.images[0].key,
        },
        ...current,
      ]
    })

    setIsCartOpen(true)
  }

  const updateItemQuantity = (cartKey, quantity) => {
    if (quantity <= 0) {
      setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  const value = useMemo(() => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return {
      cartItems,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateItemQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [cartItems, isCartOpen])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
