import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function buildCartKey(productId, variant) {
  return `${productId}-${variant}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      return
    }

    const parsed = JSON.parse(stored)

    if (Array.isArray(parsed)) {
      setItems(parsed)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const openCart = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeCart = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleCart = useCallback(() => {
    setIsOpen((current) => !current)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity <= 0) {
      removeItem(key)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity } : item,
      ),
    )
  }, [removeItem])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const addItem = useCallback((product, options = {}) => {
    const variant = options.variant || product.variants?.[0] || 'Gold Tone'
    const quantity = Math.max(1, options.quantity || 1)
    const key = buildCartKey(product.id, variant)

    setItems((current) => {
      const existing = current.find((item) => item.key === key)

      if (existing) {
        return current.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          category: product.category,
        },
      ]
    })

    openCart()
  }, [openCart])

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
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
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    }
  }, [addItem, clearCart, closeCart, isOpen, items, openCart, removeItem, toggleCart, updateQuantity])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
