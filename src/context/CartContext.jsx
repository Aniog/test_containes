import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function readInitialCart() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, quantity = 1, tone = 'Gold Tone') => {
    const itemKey = `${product.id}-${tone}`

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
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          tone,
          category: product.category,
          imageId: product.imageId,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemKey, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.itemKey !== itemKey))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.itemKey === itemKey ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (itemKey) => {
    setItems((current) => current.filter((item) => item.itemKey !== itemKey))
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((count, item) => count + item.quantity, 0)
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
      updateQuantity,
      removeItem,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen((current) => !current),
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
