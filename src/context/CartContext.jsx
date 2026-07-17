import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, variant = 'Gold', quantity = 1) => {
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
          category: product.category,
          quantity,
          imageId: product.imageIds?.[0],
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (itemId, variant) => {
    setCartItems((current) =>
      current.filter((item) => !(item.id === itemId && item.variant === variant)),
    )
  }

  const updateQuantity = (itemId, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(itemId, variant)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  )

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [cartItems, cartCount, isCartOpen, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
