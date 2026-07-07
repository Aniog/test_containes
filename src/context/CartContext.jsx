import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const buildCartItem = (product, tone, quantity) => ({
  key: `${product.slug}-${tone.toLowerCase().replace(/\s+/g, '-')}`,
  slug: product.slug,
  name: product.name,
  price: product.price,
  tone,
  quantity,
  imageCues: product.imageCues,
  shortDescription: product.shortDescription,
})

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const addToCart = (product, { tone = 'Gold Tone', quantity = 1 } = {}) => {
    setItems((currentItems) => {
      const key = `${product.slug}-${tone.toLowerCase().replace(/\s+/g, '-')}`
      const existingItem = currentItems.find((item) => item.key === key)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [...currentItems, buildCartItem(product, tone, quantity)]
    })
    openCart()
  }

  const updateQuantity = (key, quantity) => {
    if (quantity < 1) {
      setItems((currentItems) => currentItems.filter((item) => item.key !== key))
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.key === key ? { ...item, quantity } : item)),
    )
  }

  const removeFromCart = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return {
      items,
      isCartOpen,
      itemCount,
      subtotal,
      openCart,
      closeCart,
      addToCart,
      updateQuantity,
      removeFromCart,
    }
  }, [isCartOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
