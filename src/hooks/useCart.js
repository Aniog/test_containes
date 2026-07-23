import { useMemo, useState } from 'react'

export function useCart() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const cartKey = `${product.id}-${variant}`

    setCartItems((current) => {
      const existingItem = current.find((item) => item.cartKey === cartKey)

      if (existingItem) {
        return current.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          cartKey,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.gallery[0],
          variant,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (cartKey) => {
    setCartItems((current) => current.filter((item) => item.cartKey !== cartKey))
  }

  const updateQuantity = (cartKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeFromCart(cartKey)
      return
    }

    setCartItems((current) =>
      current.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  )

  const cartSubtotal = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
  )

  return {
    cartItems,
    cartCount,
    cartSubtotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
  }
}
