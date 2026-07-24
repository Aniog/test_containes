import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getItemKey = (slug, tone) => `${slug}-${tone}`
const getToneKey = (tone = 'Gold') => tone.toLowerCase()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, tone = 'Gold', quantity = 1) => {
    const nextQuantity = Number(quantity) || 1
    const toneKey = getToneKey(tone)
    const key = getItemKey(product.slug, tone)

    setItems((current) => {
      const existing = current.find((item) => item.key === key)
      if (existing) {
        return current.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + nextQuantity }
            : item,
        )
      }

      return [
        {
          key,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          toneKey,
          quantity: nextQuantity,
          category: product.category,
          scene: product.gallery?.[0] || product.cardScene,
        },
        ...current,
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.key !== key))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const clearCart = () => {
    setItems([])
  }

  const summary = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      itemCount,
      subtotal,
      shipping: subtotal >= 75 || subtotal === 0 ? 0 : 12,
      total: subtotal >= 75 || subtotal === 0 ? subtotal : subtotal + 12,
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      setIsCartOpen,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      ...summary,
    }),
    [isCartOpen, items, summary],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
