import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const tone = options.tone || product.toneOptions?.[0] || 'Gold'
    const quantity = options.quantity || 1
    const cartId = `${product.id}-${tone}`

    setItems((current) => {
      const existing = current.find((item) => item.cartId === cartId)
      if (existing) {
        return current.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { cartId, product, tone, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (cartId) => {
    setItems((current) => current.filter((item) => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, quantity) => {
    if (quantity < 1) {
      removeFromCart(cartId)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item,
      ),
    )
  }

  const value = useMemo(() => {
    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const cartTotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    )

    return {
      items,
      cartCount,
      cartTotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
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
