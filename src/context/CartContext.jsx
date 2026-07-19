import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, quantity = 1, tone = 'gold') => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.tone === tone,
      )
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
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
          imgId: product.imgId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, tone) => {
    setItems((prev) =>
      prev.filter((item) => !(item.id === id && item.tone === tone)),
    )
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity < 1) {
      removeItem(id, tone)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item,
      ),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, itemCount }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
      ...totals,
    }),
    [items, isOpen, addItem, removeItem, updateQuantity, clearCart, openCart, closeCart, toggleCart, totals],
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
