import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CartContext = createContext()

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
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product, quantity = 1, variant = null) => {
    setItems(prev => {
      const existing = prev.find(item =>
        item.id === product.id && item.variant === variant
      )
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant = null) => {
    setItems(prev => prev.filter(item =>
      !(item.id === productId && item.variant === variant)
    ))
  }, [])

  const updateQuantity = useCallback((productId, quantity, variant = null) => {
    if (quantity < 1) {
      setItems(prev => prev.filter(item =>
        !(item.id === productId && item.variant === variant)
      ))
      return
    }
    setItems(prev => prev.map(item =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity }
        : item
    ))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)

  return (
    <CartContext.Provider value={{
      items,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    }}>
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