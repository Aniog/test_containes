import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

const getCartProduct = (id) => products.find((product) => product.id === id)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const quantity = options.quantity ?? 1
    const tone = options.tone ?? 'Gold'
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (!existing) return [...current, { id: product.id, tone, quantity }]
      return current.map((item) =>
        item.id === product.id && item.tone === tone
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      )
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, tone) => {
    setItems((current) => current.filter((item) => !(item.id === id && item.tone === tone)))
  }

  const updateQuantity = (id, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, tone)
      return
    }
    setItems((current) =>
      current.map((item) => (item.id === id && item.tone === tone ? { ...item, quantity } : item)),
    )
  }

  const enrichedItems = useMemo(
    () => items.map((item) => ({ ...item, product: getCartProduct(item.id) })).filter((item) => item.product),
    [items],
  )

  const subtotal = enrichedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const itemCount = enrichedItems.reduce((sum, item) => sum + item.quantity, 0)

  const value = {
    addToCart,
    enrichedItems,
    isCartOpen,
    itemCount,
    removeFromCart,
    setIsCartOpen,
    subtotal,
    updateQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
