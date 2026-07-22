import { createContext, useContext, useMemo, useState } from 'react'

import { products } from '@/data/products'

const StoreContext = createContext(null)

const buildLineId = (productId, tone) => `${productId}-${tone}`

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setCartOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const addToCart = (product, tone = product.tones[0], quantity = 1) => {
    const lineId = buildLineId(product.id, tone)

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          lineId,
          productId: product.id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          tone,
          quantity,
          material: product.material,
          category: product.category,
        },
      ]
    })

    setCartOpen(true)
  }

  const updateCartQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.lineId !== lineId),
      )
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeFromCart = (lineId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.lineId !== lineId),
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const cartTotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  const value = {
    products,
    cartItems,
    isCartOpen,
    setCartOpen,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    cartCount,
    cartTotal,
    searchQuery,
    setSearchQuery,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
