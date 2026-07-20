import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, options = {}) => {
    const tone = options.tone || product.tone[0]
    const quantity = options.quantity || 1
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

  const removeItem = (id, tone) => {
    setItems((current) => current.filter((item) => item.id !== id || item.tone !== tone))
  }

  const updateQuantity = (id, tone, quantity) => {
    if (quantity < 1) {
      removeItem(id, tone)
      return
    }
    setItems((current) =>
      current.map((item) => (item.id === id && item.tone === tone ? { ...item, quantity } : item)),
    )
  }

  const detailedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        product: products.find((product) => product.id === item.id),
      })),
    [items],
  )

  const cartCount = detailedItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = detailedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: detailedItems,
        cartCount,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        addItem,
        removeItem,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
