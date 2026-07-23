import { createContext, useContext, useMemo, useState } from 'react'

const StoreContext = createContext(null)

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, tone = product.tones?.[0] || 'Gold Tone') => {
    setCartItems((currentItems) => {
      const lineId = `${product.slug}-${tone}`
      const existingItem = currentItems.find((item) => item.id === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: lineId,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (itemId, quantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: quantity <= 0 ? 0 : quantity } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (itemId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((currentValue) => !currentValue)

  const itemCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = {
    cartItems,
    isCartOpen,
    addToCart,
    updateQuantity,
    removeFromCart,
    openCart,
    closeCart,
    toggleCart,
    itemCount,
    subtotal,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
