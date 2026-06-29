import { createContext, useEffect, useMemo, useState } from 'react'

export const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

const readInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  const savedCart = window.localStorage.getItem(STORAGE_KEY)
  return savedCart ? JSON.parse(savedCart) : []
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(readInitialCart)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, options = {}) => {
    const quantity = options.quantity || 1
    const color = options.color || 'Gold'

    console.log('[cart] addItem', { product: product.id, quantity, color })

    setItems((current) => {
      const match = current.find(
        (item) => item.id === product.id && item.color === color,
      )

      if (match) {
        return current.map((item) =>
          item.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.gallery[0],
          color,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (id, color, quantity) => {
    console.log('[cart] updateQuantity', { id, color, quantity })

    if (quantity <= 0) {
      setItems((current) =>
        current.filter((item) => !(item.id === id && item.color === color)),
      )
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.color === color ? { ...item, quantity } : item,
      ),
    )
  }

  const removeItem = (id, color) => {
    console.log('[cart] removeItem', { id, color })
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.color === color)),
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      setIsCartOpen,
      cartCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toggleCart: () => setIsCartOpen((current) => !current),
    }),
    [items, isCartOpen, cartCount, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
