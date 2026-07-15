import { createContext, useContext, useMemo, useState } from 'react'
import { useToast } from './ToastContext.jsx'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { showToast } = useToast()

  const addItem = (product, tone = product.tones[0], quantity = 1) => {
    setItems((current) => {
      const existingItem = current.find(
        (item) => item.id === product.id && item.tone === tone,
      )

      if (existingItem) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          tone,
          quantity,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
    showToast(`${product.name} added to bag`)
  }

  const removeItem = (id, tone) => {
    setItems((current) => current.filter((item) => !(item.id === id && item.tone === tone)))
  }

  const updateQuantity = (id, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(id, tone)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item,
      ),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart,
      closeCart,
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
