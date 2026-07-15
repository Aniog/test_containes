import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velmora-cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, options = {}) => {
    const { tone = 'gold', quantity = 1 } = options
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.tone === tone
      )
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, tone) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)))
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)))
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.tone === tone ? { ...i, quantity } : i
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
