import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function readCart() {
  if (typeof window === 'undefined') return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState(() => readCart())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, variant = 'Gold Tone', quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageId: product.imageId,
          imageQuery: product.imageQuery,
          titleId: product.titleId,
          descId: product.descId,
          alt: product.alt,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = useCallback((id, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant)),
    )
  }, [])

  const updateQuantity = useCallback(
    (id, variant, nextQuantity) => {
      if (nextQuantity <= 0) {
        removeFromCart(id, variant)
        return
      }

      setItems((current) =>
        current.map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity: nextQuantity }
            : item,
        ),
      )
    },
    [removeFromCart],
  )

  const clearCart = () => setItems([])

  const summary = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return {
      itemCount,
      subtotal,
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      ...summary,
    }),
    [isCartOpen, items, removeFromCart, summary, updateQuantity],
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
