import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function buildLineId(productId, variant) {
  return `${productId}-${variant.toLowerCase()}`
}

export function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, variant = 'Gold', quantity = 1) => {
    const lineId = buildLineId(product.id, variant)

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
          price: product.price,
          imageId: product.imageId,
          category: product.category,
          material: product.material,
          shortDescription: product.shortDescription,
          variant,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeFromCart = (lineId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.lineId !== lineId))
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(lineId)
      return
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  const value = useMemo(() => {
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    const subtotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    )

    return {
      cartItems,
      isCartOpen,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      openCart,
      closeCart,
    }
  }, [cartItems, isCartOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
