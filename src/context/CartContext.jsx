import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'velmora-cart'

const getDefaultTone = (product) => product?.toneOptions?.[0] ?? 'Gold'

const getCartItemKey = (productId, tone) => `${productId}-${tone}`

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') {
      return []
    }

    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, tone = getDefaultTone(product), quantity = 1) => {
    setItems((current) => {
      const itemKey = getCartItemKey(product.id, tone)
      const existingItem = current.find((item) => item.itemKey === itemKey)

      if (existingItem) {
        return current.map((item) =>
          item.itemKey === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          itemKey,
          productId: product.id,
          name: product.name,
          price: product.price,
          imageId: product.media?.cart ?? product.imageIds.hero,
          category: product.category,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeFromCart(itemKey)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.itemKey === itemKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const removeFromCart = (itemKey) => {
    setItems((current) => current.filter((item) => item.itemKey !== itemKey))
  }

  const clearCart = () => setItems([])

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = {
    items,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartCount,
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
