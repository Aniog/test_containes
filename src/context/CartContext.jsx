import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    console.log('Adding item to Velmora cart', { productId: product.id, quantity, variant })
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, quantity, variant }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, variant) => {
    console.log('Removing item from Velmora cart', { id, variant })
    setItems((current) => current.filter((item) => !(item.id === id && item.variant === variant)))
  }

  const updateQuantity = (id, variant, quantity) => {
    console.log('Updating Velmora cart quantity', { id, variant, quantity })
    if (quantity < 1) {
      removeFromCart(id, variant)
      return
    }
    setItems((current) =>
      current.map((item) => (item.id === id && item.variant === variant ? { ...item, quantity } : item)),
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      cartCount,
      subtotal,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
    }),
    [items, cartCount, subtotal, isCartOpen],
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
