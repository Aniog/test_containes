import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)
const getLineId = (product, variant) => `${product.id}-${variant}`

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, quantity = 1, variant = 'Gold') => {
    const lineId = getLineId(product, variant)
    setItems((current) => {
      const existing = current.find((item) => item.lineId === lineId)
      if (existing) return current.map((item) => item.lineId === lineId ? { ...item, quantity: item.quantity + quantity } : item)
      return [...current, { lineId, product, quantity, variant }]
    })
    setIsCartOpen(true)
  }

  const removeItem = (lineId) => setItems((current) => current.filter((item) => item.lineId !== lineId))
  const updateQuantity = (lineId, quantity) => {
    if (quantity < 1) return removeItem(lineId)
    setItems((current) => current.map((item) => item.lineId === lineId ? { ...item, quantity } : item))
  }

  const totals = useMemo(() => ({
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  }), [items])

  return <CartContext.Provider value={{ items, totals, isCartOpen, setIsCartOpen, addItem, removeItem, updateQuantity }}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
