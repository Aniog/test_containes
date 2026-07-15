import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, quantity = 1, tone = 'Gold') => {
    console.log('Velmora cart add', product.id, quantity, tone)
    setItems((current) => {
      const key = `${product.id}-${tone}`
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...current, { key, product, quantity, tone }]
    })
    setIsCartOpen(true)
  }

  const removeItem = (key) => {
    console.log('Velmora cart remove', key)
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    const safeQuantity = Math.max(1, quantity)
    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity: safeQuantity } : item,
      ),
    )
  }

  const totals = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    )
    return { count, subtotal }
  }, [items])

  const value = {
    items,
    totals,
    isCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
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
