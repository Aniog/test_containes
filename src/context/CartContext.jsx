import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const buildLineId = (product, variant) => `${product.slug}-${variant}`

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState([])

  const addToCart = (product, variant = 'Gold Tone', quantity = 1) => {
    const lineId = buildLineId(product, variant)

    setItems((current) => {
      const existingItem = current.find((item) => item.lineId === lineId)

      if (existingItem) {
        return current.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          lineId,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity < 1) {
      setItems((current) => current.filter((item) => item.lineId !== lineId))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (lineId) => {
    setItems((current) => current.filter((item) => item.lineId !== lineId))
  }

  const value = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

    return {
      items,
      isCartOpen,
      subtotal,
      itemCount,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addToCart,
      updateQuantity,
      removeItem,
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
