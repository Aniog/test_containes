import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setItems((current) => {
      const key = `${product.id}-${tone}`
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { key, productId: product.id, tone, quantity }]
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
    setItems((current) => current.map((item) => item.key === key ? { ...item, quantity } : item))
  }

  const enrichedItems = useMemo(() => items.map((item) => ({
    ...item,
    product: products.find((product) => product.id === item.productId),
  })).filter((item) => item.product), [items])

  const subtotal = enrichedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const itemCount = enrichedItems.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    items: enrichedItems,
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
  const value = useContext(CartContext)
  if (!value) throw new Error('useCart must be used inside CartProvider')
  return value
}
