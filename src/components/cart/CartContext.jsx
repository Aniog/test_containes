import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'velmora-cart'

const readStoredCart = () => {
  if (typeof window === 'undefined') return []

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  } catch {
    return []
  }
}

const buildCartKey = (productId, variant) => `${productId}-${variant}`

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  useEffect(() => {
    document.body.classList.toggle('drawer-open', isCartOpen)
    return () => document.body.classList.remove('drawer-open')
  }, [isCartOpen])

  const addItem = (product, quantity = 1, variant = 'Gold Tone') => {
    const cartKey = buildCartKey(product.id, variant)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.cartKey === cartKey)
      if (existingItem) {
        return currentItems.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          cartKey,
          id: product.id,
          slug: product.slug,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          material: product.material,
          variant,
          quantity,
        },
        ...currentItems,
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (cartKey) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.cartKey !== cartKey),
    )
  }

  const updateItemQuantity = (cartKey, nextQuantity) => {
    if (nextQuantity <= 0) {
      removeItem(cartKey)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: nextQuantity } : item,
      ),
    )
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      isCartOpen,
      addItem,
      removeItem,
      updateItemQuantity,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    }
  }, [isCartOpen, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
