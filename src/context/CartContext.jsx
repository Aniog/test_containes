import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product, quantity = 1, tone = 'Gold') => {
    setItems((current) => {
      const key = `${product.id}-${tone}`
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) => item.key === key ? { ...item, quantity: item.quantity + quantity } : item)
      }
      return [...current, { key, product, tone, quantity }]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => setItems((current) => current.filter((item) => item.key !== key))

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }
    setItems((current) => current.map((item) => item.key === key ? { ...item, quantity } : item))
  }

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    return { items, count, subtotal, isOpen, setIsOpen, addItem, removeItem, updateQuantity }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
