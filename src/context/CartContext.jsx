import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, quantity = 1, variant = 'Gold') => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.slug === product.slug && item.variant === variant,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.slug === product.slug && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: `${product.slug}-${variant}`,
          slug: product.slug,
          name: product.name,
          price: product.price,
          category: product.category,
          variant,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const removeItem = (itemId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== itemId))
  }

  const updateQuantity = (itemId, quantity) => {
    if (quantity < 1) {
      removeItem(itemId)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      setIsCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
