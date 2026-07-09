import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CartContext = createContext()

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem('velmora-cart')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
    setItems((prev) => {
      const key = `${product.id}-${variant}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + quantity } : i,
        )
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          qty: quantity,
          image: product.images?.[0] || 'default',
        },
      ]
    })
    setDrawerOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }, [])

  const updateQty = useCallback((key, qty) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((i) => i.key !== key))
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty } : i)),
    )
  }, [])

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0)
  const cartTotal = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        cartCount,
        cartTotal,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
