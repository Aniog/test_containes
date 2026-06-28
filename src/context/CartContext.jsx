import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function buildItemKey(productSlug, variant) {
  return `${productSlug}-${variant.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const openSearch = () => setIsSearchOpen(true)
  const closeSearch = () => setIsSearchOpen(false)

  const addItem = (product, quantity = 1, variant = product.variants?.[0] || 'Gold Tone') => {
    const key = buildItemKey(product.slug, variant)

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.key === key)

      if (existingItem) {
        return currentItems.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }

      return [
        ...currentItems,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          category: product.category,
          quantity,
        },
      ]
    })
  }

  const updateQuantity = (key, quantity) => {
    setItems((currentItems) =>
      currentItems
        .map((item) => (item.key === key ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const removeItem = (key) => {
    setItems((currentItems) => currentItems.filter((item) => item.key !== key))
  }

  const clearCart = () => {
    setItems([])
  }

  const summary = useMemo(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

    return { itemCount, subtotal }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      itemCount: summary.itemCount,
      subtotal: summary.subtotal,
      isCartOpen,
      openCart,
      closeCart,
      isSearchOpen,
      openSearch,
      closeSearch,
    }),
    [items, summary, isCartOpen, isSearchOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
