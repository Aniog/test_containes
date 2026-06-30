import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addToCart = useCallback((product, options) => {
    const { tone = 'gold', quantity = 1 } = options || {}
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.tone === tone
      )
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...current,
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

  const removeFromCart = useCallback((productId, tone) => {
    setItems((current) =>
      current.filter((item) => !(item.id === productId && item.tone === tone))
    )
  }, [])

  const updateQuantity = useCallback((productId, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, tone)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => setItems([]), [])

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        count,
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
