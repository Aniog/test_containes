import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const parseStoredCart = () => {
  if (typeof window === 'undefined') return []

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setItems(parseStoredCart())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = product.variants[0], quantity = 1) => {
    const cartKey = `${product.id}-${variant}`

    setItems((current) => {
      const existing = current.find((item) => item.cartKey === cartKey)

      if (existing) {
        return current.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          cartKey,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageId: product.imageIds.primary,
          titleId: product.titleId,
          descId: product.descId,
          shortDescription: product.shortDescription,
        },
      ]
    })

    setIsOpen(true)
  }

  const updateQuantity = (cartKey, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.cartKey !== cartKey))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (cartKey) => {
    setItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  const value = useMemo(() => {
    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      items,
      isOpen,
      cartCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }
  }, [isOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
