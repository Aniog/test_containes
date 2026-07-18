import { createContext, useContext, useMemo, useState, useCallback } from 'react'
import { products as allProducts } from '@/data/products'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((productId, variantId, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === productId && i.variantId === variantId,
      )
      if (existing) {
        return prev.map((i) =>
          i.productId === productId && i.variantId === variantId
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        )
      }
      return [...prev, { productId, variantId, quantity }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variantId) => {
    setItems((prev) =>
      prev.filter(
        (i) => !(i.productId === productId && i.variantId === variantId),
      ),
    )
  }, [])

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, variantId)
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.variantId === variantId
          ? { ...i, quantity }
          : i,
      ),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const enrichedItems = useMemo(() => {
    return items
      .map((item) => {
        const product = allProducts.find((p) => p.id === item.productId)
        if (!product) return null
        const variant = product.variants.find((v) => v.id === item.variantId)
        return {
          ...item,
          product,
          variant,
          lineTotal: product.price * item.quantity,
        }
      })
      .filter(Boolean)
  }, [items])

  const totalItems = useMemo(
    () => enrichedItems.reduce((sum, i) => sum + i.quantity, 0),
    [enrichedItems],
  )

  const subtotal = useMemo(
    () => enrichedItems.reduce((sum, i) => sum + i.lineTotal, 0),
    [enrichedItems],
  )

  const value = useMemo(
    () => ({
      items: enrichedItems,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
    }),
    [
      enrichedItems,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
