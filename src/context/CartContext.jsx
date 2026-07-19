import { createContext, useContext, useMemo, useState } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addItem = (product, quantity = 1) => {
    const selectedVariant = product.selectedVariant || "Gold"
    const cartKey = `${product.id}-${selectedVariant}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartKey === cartKey)
      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [...currentItems, { ...product, selectedVariant, cartKey, quantity }]
    })
    setIsCartOpen(true)
  }

  const removeItem = (cartKey) => {
    setItems((currentItems) => currentItems.filter((item) => item.cartKey !== cartKey))
  }

  const updateQuantity = (cartKey, quantity) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.cartKey === cartKey ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  const value = useMemo(
    () => ({
      items,
      itemCount,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }),
    [items, itemCount, isCartOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
