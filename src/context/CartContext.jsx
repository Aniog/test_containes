import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, tone = 'Gold', quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.tone === tone,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          shortName: product.shortName,
          slug: product.slug,
          price: product.price,
          tone,
          quantity,
          category: product.category,
          imageIds: product.imageIds,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (id, tone) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.tone === tone)),
    )
  }

  const updateQuantity = (id, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(id, tone)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item,
      ),
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
    setIsCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    itemCount,
    subtotal,
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
