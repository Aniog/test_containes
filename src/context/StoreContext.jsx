import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/storefront'
import { formatCurrency } from '@/lib/format'

const StoreContext = createContext(null)

const buildLineId = (slug, tone) => `${slug}-${tone.toLowerCase()}`

export function StoreProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const addToCart = (product, tone = 'Gold', quantity = 1) => {
    const lineId = buildLineId(product.slug, tone)

    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { lineId, slug: product.slug, tone, quantity }]
    })

    setCartOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.lineId === lineId ? { ...item, quantity: Math.max(1, quantity) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (lineId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.lineId !== lineId),
    )
  }

  const enrichedCartItems = useMemo(
    () =>
      cartItems
        .map((item) => {
          const product = products.find((entry) => entry.slug === item.slug)

          if (!product) {
            return null
          }

          const linePrice = product.price * item.quantity

          return {
            ...item,
            product,
            linePrice,
            linePriceFormatted: formatCurrency(linePrice),
          }
        })
        .filter(Boolean),
    [cartItems],
  )

  const itemCount = useMemo(
    () => enrichedCartItems.reduce((total, item) => total + item.quantity, 0),
    [enrichedCartItems],
  )

  const subtotal = useMemo(
    () => enrichedCartItems.reduce((total, item) => total + item.linePrice, 0),
    [enrichedCartItems],
  )

  const value = useMemo(
    () => ({
      addToCart,
      cartItems: enrichedCartItems,
      cartOpen,
      itemCount,
      mobileNavOpen,
      removeFromCart,
      searchOpen,
      setCartOpen,
      setMobileNavOpen,
      setSearchOpen,
      subtotal,
      subtotalFormatted: formatCurrency(subtotal),
      updateQuantity,
    }),
    [cartOpen, enrichedCartItems, itemCount, mobileNavOpen, searchOpen, subtotal],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
