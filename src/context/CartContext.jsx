import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const getInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }

  const savedCart = window.localStorage.getItem('velmora-cart')
  return savedCart ? JSON.parse(savedCart) : []
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(getInitialCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const toggleCart = () => setIsOpen((open) => !open)

  const addItem = (product, tone = 'Gold Tone', quantity = 1) => {
    const cartKey = `${product.id}-${tone}`
    console.log('Velmora cart add', { cartKey, quantity })

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
        ...currentItems,
        {
          cartKey,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })

    openCart()
  }

  const updateQuantity = (cartKey, quantity) => {
    console.log('Velmora cart update', { cartKey, quantity })
    if (quantity <= 0) {
      setItems((currentItems) => currentItems.filter((item) => item.cartKey !== cartKey))
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.cartKey === cartKey ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    )
  }

  const removeItem = (cartKey) => {
    console.log('Velmora cart remove', { cartKey })
    setItems((currentItems) => currentItems.filter((item) => item.cartKey !== cartKey))
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.quantity * item.price, 0)

    return {
      items,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      openCart,
      closeCart,
      toggleCart,
      updateQuantity,
      removeItem,
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
