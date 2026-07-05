import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

const normalizeVariant = (variant) => variant || 'Gold Tone'

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const toggleCart = () => setIsCartOpen((current) => !current)

  const addItem = (product, quantity = 1, variant = 'Gold Tone', imageSrc = '') => {
    const chosenVariant = normalizeVariant(variant)

    setItems((current) => {
      const existing = current.find(
        (item) => item.id === product.id && item.variant === chosenVariant,
      )

      if (existing) {
        return current.map((item) =>
          item.id === product.id && item.variant === chosenVariant
            ? {
                ...item,
                quantity: item.quantity + quantity,
                imageSrc: item.imageSrc || imageSrc,
              }
            : item,
        )
      }

      return [
        ...current,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          imageId: product.imageId,
          category: product.category,
          shortDescription: product.shortDescription,
          imageSrc,
          variant: chosenVariant,
          quantity,
        },
      ]
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      setItems((current) =>
        current.filter(
          (item) => !(item.id === id && item.variant === normalizeVariant(variant)),
        ),
      )
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.variant === normalizeVariant(variant)
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const removeItem = (id, variant) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.id === id && item.variant === normalizeVariant(variant)),
      ),
    )
  }

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isCartOpen,
      itemCount,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
      toggleCart,
    }),
    [items, isCartOpen, itemCount, subtotal],
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
