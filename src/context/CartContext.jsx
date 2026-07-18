import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function buildCartKey(productId, variant) {
  return `${productId}-${variant}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const cartKey = buildCartKey(product.id, variant)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartKey === cartKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          cartKey,
          productId: product.id,
          name: product.name,
          baseName: product.baseName,
          price: product.price,
          category: product.category,
          variant,
          quantity,
        },
      ]
    })

    setIsOpen(true)
  }

  const removeItem = (cartKey) => {
    setItems((currentItems) => currentItems.filter((item) => item.cartKey !== cartKey))
  }

  const updateQuantity = (cartKey, quantity) => {
    setItems((currentItems) =>
      currentItems.flatMap((item) => {
        if (item.cartKey !== cartKey) {
          return [item]
        }

        if (quantity < 1) {
          return []
        }

        return [{ ...item, quantity }]
      }),
    )
  }

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items])

  const value = useMemo(() => ({
    items,
    isOpen,
    itemCount,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }), [isOpen, itemCount, items, subtotal])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
