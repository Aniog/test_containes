import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = options.quantity || 1
    const key = `${product.id}-${tone}`

    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.key === key)
      if (existing) {
        return currentItems.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...currentItems,
        {
          key,
          id: product.id,
          name: product.name,
          category: product.category,
          price: product.price,
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
  return useContext(CartContext)
}
