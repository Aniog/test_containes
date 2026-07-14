import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setItems((current) => {
      const key = `${product.id}-${variant}`
      const existing = current.find((item) => item.key === key)

      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [...current, { key, product, quantity, variant }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (key, quantity) => {
    setItems((current) =>
      current
        .map((item) => (item.key === key ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const value = useMemo(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    )

    return {
      items,
      count,
      subtotal,
      isCartOpen,
      addToCart,
      updateQuantity,
      removeItem,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
