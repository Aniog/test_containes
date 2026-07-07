import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function readStoredCart() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    setItems(readStoredCart())
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
  }, [items])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
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
          imageId: product.imageIds.primary,
          variant,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (id, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant)),
    )
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(id, variant)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen((open) => !open),
    }
  }, [isCartOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
