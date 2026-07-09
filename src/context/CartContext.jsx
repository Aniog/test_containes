import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getCartKey = (productId, variant) => `${productId}-${variant}`

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setItems((current) => {
      const key = getCartKey(product.id, variant)
      const existing = current.find((item) => item.key === key)

      if (existing) {
        return current.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          key,
          productId: product.id,
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

  const removeFromCart = (key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity < 1) {
      removeFromCart(key)
      return
    }

    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
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
