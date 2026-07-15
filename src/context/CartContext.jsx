import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, variant = product.variants?.[0] || 'Gold Tone', quantity = 1) => {
    setItems((current) => {
      const existingIndex = current.findIndex(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existingIndex > -1) {
        return current.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageId: product.imageIds[0],
          titleId: product.titleId,
          descId: product.descId,
          shortDescription: product.shortDescription,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(id, variant)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === variant ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (id, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant)),
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      setIsCartOpen,
      addItem,
      updateQuantity,
      removeItem,
      cartCount,
      subtotal,
    }),
    [items, isCartOpen, cartCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
