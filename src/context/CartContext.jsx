import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  const storedCart = window.localStorage.getItem('velmora-cart')
  return storedCart ? JSON.parse(storedCart) : []
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const addToCart = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1
    const key = `${product.slug}-${tone.toLowerCase()}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          key,
          slug: product.slug,
          name: product.name,
          price: product.price,
          imageCueId: product.primaryCueId,
          titleId: product.titleId,
          descId: product.descId,
          tone,
          quantity,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeFromCart(key)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === key ? { ...item, quantity } : item,
      ),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const value = useMemo(() => {
    const cartCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      isCartOpen,
      cartCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
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
