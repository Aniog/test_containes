import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const addToCart = useCallback((product, options = {}) => {
    const { quantity = 1, tone = product.toneOptions?.[0] || 'gold' } = options

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
          slug: product.slug,
          price: product.price,
          tone,
          quantity,
          imageQuery: product.images?.primary || '',
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((id, tone) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.tone === tone))
    )
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity < 1) {
      setItems((current) =>
        current.filter((item) => !(item.id === id && item.tone === tone))
      )
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, count }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totals,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
