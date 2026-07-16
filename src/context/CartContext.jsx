import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const itemKey = `${product.id}-${variant}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === itemKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          key: itemKey,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.key !== itemKey))
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === itemKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const removeItem = (itemKey) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== itemKey))
  }

  const value = useMemo(() => {
    const cartCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      isCartOpen,
      cartCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [isCartOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
