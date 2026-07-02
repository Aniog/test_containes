import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, variant = 'Gold Tone', quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageId: product.imageIds.primary,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((current) =>
      current.filter(
        (item) => !(item.id === productId && item.variant === variant),
      ),
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity * item.price, 0),
    [cartItems],
  )

  const value = useMemo(
    () => ({
      cartItems,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      cartCount,
      subtotal,
    }),
    [cartItems, isCartOpen, cartCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
