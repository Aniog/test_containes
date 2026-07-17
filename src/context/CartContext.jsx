import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') {
      return []
    }

    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)

    if (!storedCart) {
      return []
    }

    try {
      return JSON.parse(storedCart)
    } catch {
      return []
    }
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, selectedColor = 'Gold Tone', quantity = 1) => {
    const cartId = `${product.id}-${selectedColor}`

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartId === cartId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          cartId,
          id: product.id,
          name: product.name,
          price: product.price,
          imageId: product.imageId,
          imageAlt: product.imageAlt,
          material: product.material,
          selectedColor,
          quantity,
          imagePromptIds: product.imagePromptIds,
        },
      ]
    })
  }

  const removeItem = (cartId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.cartId !== cartId),
    )
  }

  const updateQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeItem(cartId)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totals = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      itemCount,
      subtotal,
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [items, totals],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
