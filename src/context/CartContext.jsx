import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedCart = window.localStorage.getItem(STORAGE_KEY)

    if (!storedCart) {
      return
    }

    try {
      const parsedItems = JSON.parse(storedCart)
      if (Array.isArray(parsedItems)) {
        setItems(parsedItems)
      }
    } catch (error) {
      console.error('Failed to restore cart', error)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const cartKey = `${product.id}-${variant}`

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
          slug: product.slug,
          name: product.name,
          category: product.category,
          material: product.material,
          variant,
          price: product.price,
          quantity,
        },
      ]
    })

    setIsOpen(true)
  }

  const removeItem = (cartKey) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey),
    )
  }

  const updateQuantity = (cartKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(cartKey)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((open) => !open),
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
