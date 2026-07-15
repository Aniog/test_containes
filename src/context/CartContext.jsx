import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, variant = 'Gold Tone', quantity = 1) => {
    const cartId = `${product.id}-${variant}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartId === cartId)

      if (existingItem) {
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
          id: product.id,
          slug: product.slug,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (cartId) => {
    setItems((currentItems) => currentItems.filter((item) => item.cartId !== cartId))
  }

  const updateQuantity = (cartId, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeFromCart(cartId)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      subtotal,
      itemCount,
    }),
    [isCartOpen, items, subtotal, itemCount],
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
