import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

const buildCartKey = (productId, variant) => `${productId}::${variant}`

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Failed to restore cart state', error)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    setIsCartOpen(false)
  }, [location.pathname, location.hash])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const addItem = (product, quantity = 1, variant = 'Gold Tone') => {
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
          name: product.name,
          price: product.price,
          imageId: product.imageIds.primary,
          slug: product.slug,
          description: product.shortDescription,
          quantity,
          variant,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (key, nextQuantity) => {
    if (nextQuantity <= 0) {
      setItems((current) => current.filter((item) => item.key !== key))
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.key === key ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const removeItem = (key) => {
    setItems((current) => current.filter((item) => item.key !== key))
  }

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.quantity * item.price, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
      itemCount,
      subtotal,
    }),
    [items, isCartOpen, itemCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
