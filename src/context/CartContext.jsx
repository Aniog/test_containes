import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getCartKey = (productId, variant) => `${productId}-${variant}`

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((open) => !open)

  const addToCart = ({ product, variant, quantity = 1 }) => {
    setCartItems((currentItems) => {
      const cartKey = getCartKey(product.id, variant)
      const existingItem = currentItems.find((item) => item.cartKey === cartKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          cartKey,
          productId: product.id,
          name: product.name,
          handle: product.handle,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (cartKey, quantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: Math.max(1, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (cartKey) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey),
    )
  }

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = {
    cartItems,
    isCartOpen,
    itemCount,
    subtotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    openCart,
    closeCart,
    toggleCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
