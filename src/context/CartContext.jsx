import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function readStoredCart() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const savedCart = window.localStorage.getItem(STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : []
  } catch (error) {
    console.warn('Velmora cart storage unavailable', error)
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [hasLoadedStorage, setHasLoadedStorage] = useState(false)

  useEffect(() => {
    setItems(readStoredCart())
    setHasLoadedStorage(true)
  }, [])

  useEffect(() => {
    if (!hasLoadedStorage || typeof window === 'undefined') {
      return
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      console.info('Velmora cart updated', items)
    } catch (error) {
      console.warn('Velmora cart could not be persisted', error)
    }
  }, [hasLoadedStorage, items])

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const addItem = (product, tone = 'Gold', quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id && item.tone === tone,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          shortName: product.shortName,
          price: product.price,
          tone,
          quantity,
          material: product.material,
          category: product.category,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const removeItem = (id, tone) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.tone === tone)),
    )
  }

  const updateQuantity = (id, tone, quantity) => {
    if (quantity <= 0) {
      removeItem(id, tone)
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.tone === tone ? { ...item, quantity } : item,
      ),
    )
  }

  const clearCart = () => setItems([])
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((currentValue) => !currentValue)

  const value = {
    items,
    itemCount,
    subtotal,
    isCartOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
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
