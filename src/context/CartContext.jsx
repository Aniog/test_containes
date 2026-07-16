import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const findMatchingItemIndex = (items, productId, tone) => {
  return items.findIndex((item) => item.productId === productId && item.tone === tone)
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, tone = product.tones[0]) => {
    setItems((currentItems) => {
      const nextItems = [...currentItems]
      const itemIndex = findMatchingItemIndex(nextItems, product.id, tone)

      if (itemIndex > -1) {
        nextItems[itemIndex] = {
          ...nextItems[itemIndex],
          quantity: nextItems[itemIndex].quantity + quantity,
        }
        return nextItems
      }

      nextItems.push({
        productId: product.id,
        tone,
        quantity,
        product,
      })

      return nextItems
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (productId, tone, quantity) => {
    setItems((currentItems) => {
      if (quantity <= 0) {
        return currentItems.filter(
          (item) => !(item.productId === productId && item.tone === tone),
        )
      }

      return currentItems.map((item) =>
        item.productId === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      )
    })
  }

  const removeFromCart = (productId, tone) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.tone === tone),
      ),
    )
  }

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [items],
  )

  const value = {
    items,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    cartCount,
    subtotal,
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
