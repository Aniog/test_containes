import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product, variant = 'Gold', qty = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.variant === variant)
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.variant === variant
            ? { ...i, qty: i.qty + qty }
            : i
        )
      }
      return [...prev, { ...product, variant, qty }]
    })
    setIsOpen(true)
  }

  const removeItem = (id, variant) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.variant === variant)))
  }

  const updateQty = (id, variant, qty) => {
    if (qty <= 0) { removeItem(id, variant); return }
    setItems(prev =>
      prev.map(i => i.id === id && i.variant === variant ? { ...i, qty } : i)
    )
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, total, count, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
