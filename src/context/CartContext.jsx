import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window === 'undefined') {
      return []
    }

    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = (product, variant, quantity = 1) => {
    setCartItems((current) => {
      const existingItem = current.find(
        (item) => item.productId === product.id && item.variant === variant,
      )

      if (existingItem) {
        return current.map((item) =>
          item.productId === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: `${product.id}-${variant}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageId: `${product.slug}-gallery-1`,
          imagePrompt: product.galleryPrompts[0],
          slug: product.slug,
          category: product.category,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (itemId) => {
    setCartItems((current) => current.filter((item) => item.id !== itemId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const value = useMemo(() => {
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      itemCount,
      subtotal,
    }
  }, [cartItems, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
