import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState([])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((current) => !current)

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setItems((currentItems) => {
      const existingIndex = currentItems.findIndex(
        (item) => item.id === product.id && item.tone === tone,
      )

      if (existingIndex >= 0) {
        return currentItems.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          imageId: product.imgIds.primary,
          titleId: product.titleId,
          descId: product.descId,
          shortDescription: product.shortDescription,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (id, tone, quantity) => {
    setItems((currentItems) => {
      if (quantity <= 0) {
        return currentItems.filter(
          (item) => !(item.id === id && item.tone === tone),
        )
      }

      return currentItems.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item,
      )
    })
  }

  const removeItem = (id, tone) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.tone === tone)),
    )
  }

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = {
    items,
    isCartOpen,
    itemCount,
    subtotal,
    openCart,
    closeCart,
    toggleCart,
    addToCart,
    updateQuantity,
    removeItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
