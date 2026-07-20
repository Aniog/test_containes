import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1

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
          price: product.price,
          category: product.category,
          description: product.description,
          imgId: `${product.imgId}-cart`,
          titleId: `${product.titleId}-cart`,
          descId: `${product.descId}-cart`,
          tone,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId, tone) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === productId && item.tone === tone)),
    )
  }

  const updateQuantity = (productId, tone, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, tone)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId && item.tone === tone ? { ...item, quantity } : item,
      ),
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      cartCount,
      subtotal,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
    }),
    [items, cartCount, subtotal, isCartOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
