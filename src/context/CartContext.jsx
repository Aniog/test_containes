import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

const findProduct = (productId) => products.find((product) => product.id === productId)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold Tone'
    const quantity = Math.max(1, options.quantity || 1)
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id && item.variant === variant)
      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { productId: product.id, variant, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setItems((current) => current.filter((item) => !(item.productId === productId && item.variant === variant)))
  }

  const updateQuantity = (productId, variant, quantity) => {
    const nextQuantity = Math.max(1, quantity)
    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity: nextQuantity }
          : item,
      ),
    )
  }

  const cartItems = useMemo(
    () =>
      items
        .map((item) => ({ ...item, product: findProduct(item.productId) }))
        .filter((item) => Boolean(item.product)),
    [items],
  )

  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const value = {
    cartItems,
    itemCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}
