import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((current) => !current)

  const addItem = (
    product,
    variant = product.variants?.[0] || 'Gold Tone',
    quantity = 1,
  ) => {
    setCartItems((current) => {
      const existing = current.find(
        (item) => item.slug === product.slug && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.slug === product.slug && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (slug, variant) => {
    setCartItems((current) =>
      current.filter((item) => !(item.slug === slug && item.variant === variant)),
    )
  }

  const updateQuantity = (slug, variant, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(slug, variant)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.slug === slug && item.variant === variant
          ? { ...item, quantity: nextQuantity }
          : item,
      ),
    )
  }

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      addItem,
      cartItems,
      closeCart,
      isCartOpen,
      itemCount,
      openCart,
      removeItem,
      subtotal,
      toggleCart,
      updateQuantity,
    }),
    [cartItems, isCartOpen, itemCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
