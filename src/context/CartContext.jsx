import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === variant,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          shortName: product.shortName,
          category: product.category,
          price: product.price,
          variant,
          quantity,
          image: product.gallery[0],
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (id, variant) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.variant === variant)),
    )
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

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      setIsCartOpen,
      addItem,
      removeItem,
      updateQuantity,
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
