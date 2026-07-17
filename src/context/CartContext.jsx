import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function sanitizeCartItems(value) {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .filter((item) => item && item.lineId && item.productId)
    .map((item) => ({
      lineId: item.lineId,
      productId: item.productId,
      slug: item.slug,
      name: item.name,
      price: Number(item.price) || 0,
      quantity: Math.max(1, Number(item.quantity) || 1),
      variant: item.variant || 'Gold Tone',
      category: item.category || '',
    }))
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return
    }

    try {
      setItems(sanitizeCartItems(JSON.parse(stored)))
    } catch {
      setItems([])
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const lineId = `${product.id}-${variant.toLowerCase().replace(/\s+/g, '-')}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          lineId,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          quantity,
          variant,
          category: product.category,
        },
        ...currentItems,
      ]
    })

    setIsOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.lineId !== lineId))
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (lineId) => {
    setItems((currentItems) => currentItems.filter((item) => item.lineId !== lineId))
  }

  const clearCart = () => {
    setItems([])
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [isOpen, itemCount, items, subtotal],
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
