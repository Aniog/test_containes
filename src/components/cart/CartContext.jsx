import { createContext, useContext, useMemo, useState } from 'react'
import strkImgConfig from '@/strk-img-config.json'

const CartContext = createContext(null)

const isGeneratedImageUrl = (value) => Boolean(value && !value.startsWith('data:image'))

const getProductImageSrc = (product) => {
  if (isGeneratedImageUrl(product.cartImageSrc)) return product.cartImageSrc
  const imageKeys = [`bestseller-${product.imageId}`, `shop-${product.imageId}`, `related-${product.imageId}`]
  const imageEntry = imageKeys.map((key) => strkImgConfig[key]).find((entry) => entry?.results?.[0]?.url)
  return imageEntry?.results?.[0]?.url || ''
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, options = {}) => {
    const tone = options.tone || 'Gold'
    const quantity = Math.max(1, options.quantity || 1)
    const cartImageSrc = getProductImageSrc(product)
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id && item.tone === tone)
      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }
      return [...current, { ...product, tone, quantity, cartImageSrc }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (id, tone) => {
    setItems((current) => current.filter((item) => !(item.id === id && item.tone === tone)))
  }

  const updateQuantity = (id, tone, quantity) => {
    const nextQuantity = Math.max(1, quantity)
    setItems((current) =>
      current.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [items, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
