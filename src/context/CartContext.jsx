import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = useCallback((product, variant = 'Gold', quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.variant === variant
      )
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageKey: product.images?.[0] || product.id,
        },
      ]
    })
    setCartOpen(true)
  }, [])

  const removeFromCart = useCallback((productId, variant) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === productId && item.variant === variant))
    )
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }, [removeFromCart])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}