import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  const savedCart = window.localStorage.getItem('velmora-cart')
  return savedCart ? JSON.parse(savedCart) : []
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('velmora-cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = (product, tone = 'Gold Tone', quantity = 1) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id && item.tone === tone,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { product, tone, quantity }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, tone)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const removeItem = (productId, tone) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.product.id === productId && item.tone === tone),
      ),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0,
      ),
    [cartItems],
  )

  const value = {
    cartItems,
    cartCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
