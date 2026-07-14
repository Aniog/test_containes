import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen((value) => !value)

  const addItem = (product, quantity = 1, tone = 'Gold') => {
    setItems((current) => {
      const existingItem = current.find(
        (item) => item.slug === product.slug && item.tone === tone,
      )

      if (existingItem) {
        return current.map((item) =>
          item.slug === product.slug && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          slug: product.slug,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          tone,
          quantity,
          category: product.category,
        },
      ]
    })
    setIsOpen(true)
  }

  const updateQuantity = (slug, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(slug, tone)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.slug === slug && item.tone === tone ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (slug, tone) => {
    setItems((current) =>
      current.filter((item) => !(item.slug === slug && item.tone === tone)),
    )
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return {
      items,
      isOpen,
      itemCount,
      subtotal,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQuantity,
      removeItem,
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
