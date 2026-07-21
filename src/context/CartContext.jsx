import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const getStoredCart = () => {
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
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setItems(getStoredCart())
    setHasHydrated(true)
  }, [])

  useEffect(() => {
    if (!hasHydrated || typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [hasHydrated, items])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const itemKey = `${product.slug}-${variant.toLowerCase().replace(/\s+/g, '-')}`

    setItems((current) => {
      const existing = current.find((item) => item.itemKey === itemKey)
      if (existing) {
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
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          category: product.category,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemKey, quantity) => {
    setItems((current) =>
      current
        .map((item) =>
          item.itemKey === itemKey
            ? { ...item, quantity: Math.max(1, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (itemKey) => {
    setItems((current) => current.filter((item) => item.itemKey !== itemKey))
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  )

  const value = {
    items,
    isCartOpen,
    itemCount,
    subtotal,
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
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
