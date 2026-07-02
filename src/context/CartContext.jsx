import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

function loadCart() {
  try {
    const raw = localStorage.getItem('velmora-cart')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(items) {
  localStorage.setItem('velmora-cart', JSON.stringify(items))
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    saveCart(items)
  }, [items])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const addItem = useCallback((product, variant = 'Gold') => {
    setItems((prev) => {
      const key = `${product.id}-${variant}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { key, product, variant, price: product.price, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, quantity } : i))
    )
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  return (
    <CartContext.Provider
      value={{ items, itemCount, subtotal, isOpen, addItem, removeItem, updateQuantity, openCart, closeCart }}
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