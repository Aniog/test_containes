import React from 'react'

const CartContext = React.createContext(null)

const normalizeTone = (tone) => tone || 'Gold'
const slugify = (value) =>
  String(value || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = React.useState(false)
  const [items, setItems] = React.useState([])

  const openCart = React.useCallback(() => setIsCartOpen(true), [])
  const closeCart = React.useCallback(() => setIsCartOpen(false), [])
  const toggleCart = React.useCallback(() => {
    setIsCartOpen((current) => !current)
  }, [])

  const addItem = React.useCallback((product, quantity = 1, tone = 'Gold') => {
    const normalizedTone = normalizeTone(tone)

    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.tone === normalizedTone,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === normalizedTone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          tone: normalizedTone,
          quantity,
          imageId: product.imageId,
          cartImageId: `cart-${product.imageId}-${slugify(normalizedTone)}-image-v2`,
          titleId: `cart-${product.id}-${slugify(normalizedTone)}-title`,
          descId: `cart-${product.id}-${slugify(normalizedTone)}-desc`,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
  }, [])

  const updateQuantity = React.useCallback((id, tone, quantity) => {
    if (quantity <= 0) {
      setItems((current) =>
        current.filter((item) => !(item.id === id && item.tone === tone)),
      )
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item,
      ),
    )
  }, [])

  const removeItem = React.useCallback((id, tone) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.tone === tone)),
    )
  }, [])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = React.useMemo(
    () => ({
      items,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
      toggleCart,
    }),
    [
      items,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
      toggleCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = React.useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
