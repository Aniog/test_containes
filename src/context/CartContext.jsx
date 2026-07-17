import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, options = {}) => {
    const tone = options.tone || 'gold'
    const quantity = Number(options.quantity || 1)

    setItems((currentItems) => {
      const lineId = `${product.slug}-${tone}`
      const existingItem = currentItems.find((item) => item.lineId === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          lineId,
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
          tone,
          shortDescription: product.shortDescription,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.lineId !== lineId),
      )
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (lineId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.lineId !== lineId),
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
    addItem,
    updateQuantity,
    removeItem,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
