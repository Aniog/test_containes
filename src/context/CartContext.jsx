import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getCartKey = (productId, tone) => `${productId}-${tone}`

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, quantity = 1, tone = product.tones[0]) => {
    const key = getCartKey(product.id, tone)

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...currentItems,
        {
          key,
          productId: product.id,
          name: product.shortName,
          price: product.price,
          imagePrompt: product.imagePrompts.primary,
          tone,
          quantity,
          slug: product.slug,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (key) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(key)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.key === key ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = useMemo(
    () => ({
      cartItems,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [cartItems, isCartOpen, itemCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
