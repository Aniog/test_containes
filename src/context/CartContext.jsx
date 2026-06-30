import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'velmora-cart'
const CartContext = createContext(null)

const createLineId = (productId, variant) =>
  `${productId}-${variant.toLowerCase().replace(/\s+/g, '-')}`

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    try {
      const storedItems = window.localStorage.getItem(CART_STORAGE_KEY)

      if (storedItems) {
        setItems(JSON.parse(storedItems))
      }
    } catch (error) {
      console.error('Unable to restore cart state', error)
    } finally {
      setIsReady(true)
    }
  }, [])

  useEffect(() => {
    if (!isReady) {
      return
    }

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [isReady, items])

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const lineId = createLineId(product.id, variant)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.lineId === lineId)

      if (existingItem) {
        return currentItems.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        {
          lineId,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          category: product.category,
          shortDescription: product.shortDescription,
          price: product.price,
          quantity,
          variant,
        },
        ...currentItems,
      ]
    })

    setIsOpen(true)
  }

  const updateQuantity = (lineId, quantity) => {
    if (quantity <= 0) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.lineId !== lineId),
      )
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.lineId === lineId ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (lineId) => {
    setItems((currentItems) => currentItems.filter((item) => item.lineId !== lineId))
  }

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  )

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  )

  const value = {
    addItem,
    closeCart: () => setIsOpen(false),
    isOpen,
    itemCount,
    items,
    openCart: () => setIsOpen(true),
    removeItem,
    subtotal,
    toggleCart: () => setIsOpen((currentValue) => !currentValue),
    updateQuantity,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
