import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '@/data/storefront'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const enrichItems = (items) =>
  items
    .map((item) => {
      const product = products.find((entry) => entry.id === item.productId)

      if (!product) {
        return null
      }

      return {
        ...item,
        product,
        lineTotal: product.price * item.quantity,
      }
    })
    .filter(Boolean)

const getInitialCart = () => {
  const rawCart = window.localStorage.getItem(STORAGE_KEY)
  return rawCart ? JSON.parse(rawCart) : []
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(getInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    console.log('[Velmora] cart updated', items)
  }, [items])

  const cartItems = useMemo(() => enrichItems(items), [items])
  const itemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.lineTotal, 0),
    [cartItems],
  )

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((open) => !open)

  const addItem = (product, tone = product.tones[0], quantity = 1) => {
    const itemKey = `${product.id}-${tone}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === itemKey)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          key: itemKey,
          productId: product.id,
          tone,
          quantity,
        },
      ]
    })

    console.log('[Velmora] add to cart', { product: product.slug, tone, quantity })
    openCart()
  }

  const removeItem = (itemKey) => {
    console.log('[Velmora] remove from cart', itemKey)
    setItems((currentItems) => currentItems.filter((item) => item.key !== itemKey))
  }

  const updateQuantity = (itemKey, quantity) => {
    if (quantity <= 0) {
      removeItem(itemKey)
      return
    }

    console.log('[Velmora] update quantity', { itemKey, quantity })
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.key === itemKey ? { ...item, quantity } : item,
      ),
    )
  }

  const value = {
    items: cartItems,
    itemCount,
    subtotal,
    isCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    openCart,
    closeCart,
    toggleCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
