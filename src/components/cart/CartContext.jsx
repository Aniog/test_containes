import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getLineId = (productId, tone = 'Gold') => `${productId}:${tone}`

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1
    const lineId = getLineId(product.id, tone)

    setItems((current) => {
      const existing = current.find((item) => item.lineId === lineId)
      if (existing) {
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
          tone,
          quantity,
          imgId: `cart-${product.id}-${tone.toLowerCase()}-image`,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const removeItem = (lineId) => {
    setItems((current) => current.filter((item) => item.lineId !== lineId))
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      removeItem(lineId)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}
