import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    console.log('[Velmora cart] add item', { productId: product.id, quantity, tone })
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { id: product.id, tone, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, tone) => {
    console.log('[Velmora cart] remove item', { id, tone })
    setItems((current) => current.filter((item) => !(item.id === id && item.tone === tone)))
  }

  const updateQuantity = (id, tone, quantity) => {
    const nextQuantity = Math.max(1, quantity)
    console.log('[Velmora cart] update quantity', { id, tone, quantity: nextQuantity })
    setItems((current) =>
      current.map((item) => (item.id === id && item.tone === tone ? { ...item, quantity: nextQuantity } : item)),
    )
  }

  const enrichedItems = items.map((item) => ({
    ...item,
    product: products.find((product) => product.id === item.id),
  })).filter((item) => item.product)

  const itemCount = enrichedItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = enrichedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const value = useMemo(() => ({
    items: enrichedItems,
    itemCount,
    subtotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
  }), [enrichedItems, itemCount, subtotal, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
