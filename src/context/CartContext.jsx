import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const key = `${product.slug}-${variant}`

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
          slug: product.slug,
          name: product.name,
          price: product.price,
          material: product.material,
          variant,
          quantity,
        },
      ]
    })

    setIsOpen(true)
  }

  const updateQuantity = (key, quantity) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.key === key ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const value = {
    items,
    isOpen,
    subtotal,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
