import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const buildCartId = (productId, tone) => `${productId}-${tone.toLowerCase()}`

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, tone, quantity = 1) => {
    const cartId = buildCartId(product.id, tone)

    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.cartId === cartId)

      if (existing) {
        return currentItems.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          cartId,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone,
          imageId: product.imageId,
          category: product.category,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (cartId, nextQuantity) => {
    if (nextQuantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.cartId !== cartId))
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const removeItem = (cartId) => {
    setItems((currentItems) => currentItems.filter((item) => item.cartId !== cartId))
  }

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      cartCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [items, cartCount, subtotal, isCartOpen],
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
