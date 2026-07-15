import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const ShopContext = createContext(null)

const normalizeVariant = (variant) => variant ?? 'Gold Tone'

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold Tone') => {
    const finalVariant = normalizeVariant(variant)

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.productId === product.id && item.variant === finalVariant,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === product.id && item.variant === finalVariant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          variant: finalVariant,
          quantity,
          imageId: product.imageIds.hero,
          slug: product.slug,
          subtitle: product.subtitle,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => !(item.productId === productId && item.variant === variant),
      ),
    )
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const value = useMemo(() => {
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      products,
      cartItems,
      cartCount,
      subtotal,
      isCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
    }
  }, [cartItems, isCartOpen])

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useShop must be used within a ShopProvider')
  }

  return context
}
