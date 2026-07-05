import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'velmora-cart'
const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Failed to restore cart state', error)
    }
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
      console.error('Failed to persist cart state', error)
    }
  }, [items])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const key = `${product.slug}-${variant}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...currentItems,
        {
          key,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })
  }

  const removeItem = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const updateItemQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateItemQuantity,
    }),
    [items, itemCount, subtotal],
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
