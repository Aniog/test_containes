import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const getStoredCart = () => {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    return []
  }

  const parsed = JSON.parse(stored)
  return Array.isArray(parsed) ? parsed : []
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    setItems(getStoredCart())
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, options = {}) => {
    const variant = options.variant ?? 'Gold Tone'
    const quantity = options.quantity ?? 1

    setItems((current) => {
      const lineId = `${product.slug}-${variant}`
      const existingItem = current.find((item) => item.lineId === lineId)

      if (existingItem) {
        return current.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          lineId,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.lineId !== lineId))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (lineId) => {
    setItems((current) => current.filter((item) => item.lineId !== lineId))
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    )

    return {
      items,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [isCartOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
