import React from 'react'

const StoreContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpen, setCartOpen] = React.useState(false)

  const addToCart = React.useCallback((product, variant = 'Gold Tone', quantity = 1) => {
    const safeQuantity = Math.max(1, quantity)
    const cartKey = `${product.slug}-${variant}`

    setCartItems((current) => {
      const existingItem = current.find((item) => item.key === cartKey)

      if (existingItem) {
        return current.map((item) =>
          item.key === cartKey
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item,
        )
      }

      return [
        ...current,
        {
          key: cartKey,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity: safeQuantity,
          category: product.category,
        },
      ]
    })

    setCartOpen(true)
  }, [])

  const updateQuantity = React.useCallback((key, quantity) => {
    setCartItems((current) =>
      current.flatMap((item) => {
        if (item.key !== key) {
          return [item]
        }

        if (quantity <= 0) {
          return []
        }

        return [{ ...item, quantity }]
      }),
    )
  }, [])

  const removeFromCart = React.useCallback((key) => {
    setCartItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const cartCount = React.useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const subtotal = React.useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = React.useMemo(
    () => ({
      cartItems,
      cartCount,
      cartOpen,
      subtotal,
      addToCart,
      closeCart: () => setCartOpen(false),
      openCart: () => setCartOpen(true),
      removeFromCart,
      setCartOpen,
      updateQuantity,
    }),
    [addToCart, cartCount, cartItems, cartOpen, removeFromCart, subtotal, updateQuantity],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = React.useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
