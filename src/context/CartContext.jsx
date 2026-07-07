import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function buildCartKey(productId, variant) {
  return `${productId}-${variant}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      return
    }

    try {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) {
        setItems(parsed)
      }
    } catch (error) {
      console.error('Failed to hydrate cart', error)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = product.variants?.[0] || 'Gold Tone', quantity = 1) => {
    const key = buildCartKey(product.id, variant)

    setItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key
            ? { ...item, quantity: Math.min(item.quantity + quantity, 10) }
            : item,
        )
      }

      return [
        ...current,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.images?.[0] || null,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (key, nextQuantity) => {
    if (nextQuantity <= 0) {
      setItems((current) => current.filter((item) => item.key !== key))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity: Math.min(nextQuantity, 10) } : item,
      ),
    )
  }

  const removeItem = (key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const clearCart = () => {
    setItems([])
  }

  const value = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

    return {
      items,
      subtotal,
      totalItems,
      isCartOpen,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
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
