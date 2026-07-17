import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const defaultTone = 'Gold'

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, quantity = 1, tone = defaultTone) => {
    setItems((current) => {
      const existing = current.find(
        (item) => item.productId === product.id && item.tone === tone,
      )

      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          productId: product.id,
          slug: product.slug,
          name: product.shortName,
          price: product.price,
          tone,
          quantity,
          imageId: product.imageIds.primary,
          titleId: `${product.contentIds.title}-cart`,
          descId: `${product.contentIds.desc}-cart`,
          description: product.description,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (productId, tone) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.productId === productId && item.tone === tone),
      ),
    )
  }

  const updateItemQuantity = (productId, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(productId, tone)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.tone === tone
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      cartCount,
      subtotal,
      addItem,
      removeItem,
      updateItemQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen((current) => !current),
    }),
    [cartCount, isCartOpen, items, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
