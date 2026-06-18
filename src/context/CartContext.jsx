import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function getStoredCart() {
  if (typeof window === 'undefined') {
    return []
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY)
  if (!storedValue) {
    return []
  }

  try {
    return JSON.parse(storedValue)
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(getStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addToCart = (product, tone = 'Gold Tone', quantity = 1) => {
    const lineId = `${product.slug}-${tone.toLowerCase().replace(/\s+/g, '-')}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === lineId)
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === lineId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        {
          id: lineId,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imageDescription: product.imageDescriptions[0],
          imageUrl: product.cardImage || '',
        },
        ...currentItems,
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.id !== lineId))
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.id === lineId ? { ...item, quantity } : item)),
    )
  }

  const removeFromCart = (lineId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== lineId))
  }

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    [isCartOpen, items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
