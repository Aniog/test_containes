import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

const getProduct = (productId) => products.find((product) => product.id === productId)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const variant = options.variant || 'Gold'
    const quantity = Math.max(1, options.quantity || 1)
    const key = `${product.id}-${variant}`

    setItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...current,
        {
          key,
          productId: product.id,
          variant,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    const safeQuantity = Math.max(1, quantity)
    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity: safeQuantity } : item,
      ),
    )
  }

  const clearCart = () => setItems([])

  const enrichedItems = useMemo(
    () =>
      items
        .map((item) => ({
          ...item,
          product: getProduct(item.productId),
        }))
        .filter((item) => item.product),
    [items],
  )

  const itemCount = enrichedItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = enrichedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      items: enrichedItems,
      itemCount,
      subtotal,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [enrichedItems, itemCount, subtotal, isCartOpen],
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
