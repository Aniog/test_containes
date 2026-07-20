import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addToCart = useCallback(
    (product, variant = product.variants?.[0] || 'Gold', qty = 1) => {
      setItems((current) => {
        const existing = current.find(
          (item) => item.id === product.id && item.variant === variant
        )
        if (existing) {
          return current.map((item) =>
            item.id === product.id && item.variant === variant
              ? { ...item, qty: item.qty + qty }
              : item
          )
        }
        return [
          ...current,
          {
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            variant,
            qty,
          },
        ]
      })
      setIsOpen(true)
    },
    []
  )

  const removeFromCart = useCallback((productId, variant) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.id === productId && item.variant === variant)
      )
    )
  }, [])

  const updateQty = useCallback((productId, variant, qty) => {
    if (qty <= 0) {
      setItems((current) =>
        current.filter(
          (item) => !(item.id === productId && item.variant === variant)
        )
      )
      return
    }
    setItems((current) =>
      current.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, qty }
          : item
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
    const count = items.reduce((sum, item) => sum + item.qty, 0)
    return { subtotal, count }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      addToCart,
      removeFromCart,
      updateQty,
      clearCart,
      ...totals,
    }),
    [items, isOpen, openCart, closeCart, addToCart, removeFromCart, updateQty, clearCart, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
