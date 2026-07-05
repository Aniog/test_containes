import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora_cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // ignore
  }
  return []
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // ignore
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadCart())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    saveCart(items)
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((o) => !o), [])

  const addItem = useCallback((product, quantity = 1, variant = product.variants?.[0]) => {
    setItems((current) => {
      const existing = current.find(
        (i) => i.id === product.id && i.variant === variant
      )
      if (existing) {
        return current.map((i) =>
          i.id === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image_query: product.image_query,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, variant) => {
    setItems((current) =>
      current.filter((i) => !(i.id === id && i.variant === variant))
    )
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity < 1) {
      setItems((current) =>
        current.filter((i) => !(i.id === id && i.variant === variant))
      )
      return
    }
    setItems((current) =>
      current.map((i) =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
