import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((product, variantId, quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id && item.variantId === variantId
      )
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id && item.variantId === variantId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...current, { product, variantId, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variantId) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.product.id === productId && item.variantId === variantId)
      )
    )
  }, [])

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    if (quantity < 1) {
      removeItem(productId, variantId)
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.product.id === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    )
  }, [removeItem])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
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
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clearCart, totals]
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
