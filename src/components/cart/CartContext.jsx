import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'velmora-cart'
const CartContext = createContext(null)

const getInitialItems = () => {
  if (typeof window === 'undefined') {
    return []
  }

  const storedItems = window.localStorage.getItem(CART_STORAGE_KEY)
  return storedItems ? JSON.parse(storedItems) : []
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(getInitialItems)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, options = {}) => {
    const tone = options.tone || product.tones?.[0] || 'Gold Tone'
    const quantity = options.quantity || 1
    const lineId = `${product.slug}-${tone}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          lineId,
          slug: product.slug,
          name: product.name,
          price: product.price,
          category: product.category,
          tone,
          quantity,
        },
        ...currentItems,
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = useCallback((lineId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.lineId !== lineId),
    )
  }, [])

  const updateQuantity = useCallback(
    (lineId, nextQuantity) => {
      if (nextQuantity <= 0) {
        removeFromCart(lineId)
        return
      }

      setItems((currentItems) =>
        currentItems.map((item) =>
          item.lineId === lineId ? { ...item, quantity: nextQuantity } : item,
        ),
      )
    },
    [removeFromCart],
  )

  const openCart = useCallback(() => setIsCartOpen(true), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
    }
  }, [closeCart, isCartOpen, items, openCart, removeFromCart, updateQuantity])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
