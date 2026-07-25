import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'velmora-cart'

const readStoredItems = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const value = window.localStorage.getItem(CART_STORAGE_KEY)
    return value ? JSON.parse(value) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredItems)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant, quantity = 1) => {
    const itemId = `${product.slug}-${variant}`

    setItems((current) => {
      const existingItem = current.find((item) => item.id === itemId)
      if (existingItem) {
        return current.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        {
          id: itemId,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          variant,
          quantity,
        },
        ...current,
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      setItems((current) => current.filter((item) => item.id !== itemId))
      return
    }

    setItems((current) =>
      current.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    )
  }

  const removeItem = (itemId) => {
    setItems((current) => current.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setItems([])
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.quantity * item.price, 0)

    return {
      items,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen((current) => !current),
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside a CartProvider')
  }

  return context
}
