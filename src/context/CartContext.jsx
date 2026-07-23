import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setCartOpen] = useState(false)

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const key = `${product.id}-${variant}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        },
      ]
    })

    setCartOpen(true)
  }

  const updateQuantity = (key, nextQuantity) => {
    setItems((currentItems) =>
      nextQuantity <= 0
        ? currentItems.filter((item) => item.key !== key)
        : currentItems.map((item) =>
            item.key === key ? { ...item, quantity: nextQuantity } : item,
          ),
    )
  }

  const removeItem = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      isCartOpen,
      itemCount,
      subtotal,
      setCartOpen,
      addItem,
      updateQuantity,
      removeItem,
    }
  }, [isCartOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
