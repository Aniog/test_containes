import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'velmora-cart'

const getStoredCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(getStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((open) => !open)

  const addItem = (product, variant, quantity = 1) => {
    const cartKey = `${product.id}-${variant}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartKey === cartKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          cartKey,
          productId: product.id,
          name: product.displayName,
          category: product.category,
          price: product.price,
          variant,
          quantity,
        },
        ...currentItems,
      ]
    })

    openCart()
  }

  const updateItemQuantity = (cartKey, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.cartKey !== cartKey),
      )
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (cartKey) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey),
    )
  }

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const itemCount = items.reduce((count, item) => count + item.quantity, 0)
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
      updateItemQuantity,
      removeItem,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
