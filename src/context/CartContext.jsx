import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') return []
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, tone = 'Gold', quantity = 1) => {
    const cartId = `${product.slug}-${tone}`
    setItems((current) => {
      const match = current.find((item) => item.cartId === cartId)
      if (match) {
        return current.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          cartId,
          slug: product.slug,
          name: product.name,
          tone,
          price: product.price,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }

  const updateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.cartId !== cartId))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (cartId) => {
    setItems((current) => current.filter((item) => item.cartId !== cartId))
  }

  const value = useMemo(
    () => ({
      items,
      isOpen,
      setIsOpen,
      addItem,
      updateQuantity,
      removeItem,
      cartCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      ),
    }),
    [isOpen, items],
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
