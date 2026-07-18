import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    console.log('Velmora cart add', { productId: product.id, quantity, tone })
    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity, tone }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, tone) => {
    console.log('Velmora cart remove', { id, tone })
    setItems((currentItems) => currentItems.filter((item) => !(item.id === id && item.tone === tone)))
  }

  const updateQuantity = (id, tone, quantity) => {
    console.log('Velmora cart quantity update', { id, tone, quantity })
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.id === id && item.tone === tone ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const totals = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return { itemCount, subtotal }
  }, [items])

  const value = {
    items,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    ...totals,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
