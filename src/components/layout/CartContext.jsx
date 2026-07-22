import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, tone = 'Gold') => {
    setItems((currentItems) => {
      const key = `${product.id}-${tone}`
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
          name: product.name,
          price: product.price,
          imageId: product.imageId,
          titleId: `cart-${product.id}-${tone.toLowerCase()}-title`,
          descId: `cart-${product.id}-${tone.toLowerCase()}-desc`,
          description: product.description,
          tone,
          quantity,
        },
      ]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const updateQuantity = (key, quantity) => {
    if (quantity < 1) {
      removeFromCart(key)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
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
