import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen((current) => !current)

  const addToCart = (product, options = {}) => {
    const tone = options.tone || product.tones?.[0] || 'Gold Tone'
    const quantity = Math.max(1, Number(options.quantity) || 1)
    const cartKey = `${product.slug}-${tone}`

    setItems((current) => {
      const existing = current.find((item) => item.cartKey === cartKey)

      if (existing) {
        return current.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...current,
        {
          cartKey,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          cardDescription: product.cardDescription,
          hoverNote: product.hoverNote,
        },
      ]
    })

    console.info('[Velmora cart] Added item', product.slug, tone, quantity)
    openCart()
  }

  const removeFromCart = (cartKey) => {
    setItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  const updateQuantity = (cartKey, quantity) => {
    const nextQuantity = Math.max(0, Number(quantity) || 0)

    setItems((current) => {
      if (nextQuantity === 0) {
        return current.filter((item) => item.cartKey !== cartKey)
      }

      return current.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: nextQuantity } : item,
      )
    })
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      isOpen,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
      toggleCart,
    }),
    [items, isOpen, itemCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
