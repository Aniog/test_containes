import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const getInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY)
  if (!storedValue) {
    return []
  }

  try {
    const parsedValue = JSON.parse(storedValue)
    return Array.isArray(parsedValue) ? parsedValue : []
  } catch {
    window.localStorage.removeItem(STORAGE_KEY)
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const itemKey = `${product.id}-${variant}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.itemKey === itemKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.itemKey === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          itemKey,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          category: product.category,
          material: product.material,
          imageAlt: product.name,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemKey, quantity) => {
    if (quantity <= 0) {
      removeItem(itemKey)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.itemKey === itemKey ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (itemKey) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.itemKey !== itemKey),
    )
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen((currentValue) => !currentValue),
    }
  }, [isCartOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
