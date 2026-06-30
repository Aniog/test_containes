import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const buildCartKey = (productId, tone) => `${productId}-${tone}`

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, tone = product.tones?.[0] || 'Gold Tone', quantity = 1) => {
    setCartItems((current) => {
      const cartKey = buildCartKey(product.id, tone)
      const existingItem = current.find((item) => item.cartKey === cartKey)

      if (existingItem) {
        return current.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          cartKey,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          material: product.material,
          type: product.type,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  const updateQuantity = (cartKey, quantity) => {
    if (quantity <= 0) {
      removeItem(cartKey)
      return
    }

    setCartItems((current) =>
      current.map((item) => (item.cartKey === cartKey ? { ...item, quantity } : item)),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((current) => !current)

  const value = useMemo(() => {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      cartItems,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
      toggleCart,
    }
  }, [cartItems, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
