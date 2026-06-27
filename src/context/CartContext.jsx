import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function loadInitial() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// A cart line: { key, productId, name, price, tone, qty, imgId }
// `key` uniquely identifies a variant line (productId + tone).
export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore quota errors */
    }
  }, [items])

  const addItem = (product, { tone, qty = 1 } = {}) => {
    const selectedTone = tone || product.tones?.[0] || 'Gold'
    const key = `${product.id}__${selectedTone}`
    setItems((current) => {
      const existing = current.find((line) => line.key === key)
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line,
        )
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone: selectedTone,
          qty,
          imgId: product.imgId,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => {
    setItems((current) => current.filter((line) => line.key !== key))
  }

  const updateQty = (key, qty) => {
    if (qty <= 0) {
      removeItem(key)
      return
    }
    setItems((current) =>
      current.map((line) => (line.key === key ? { ...line, qty } : line)),
    )
  }

  const clearCart = () => setItems([])

  const count = useMemo(
    () => items.reduce((sum, line) => sum + line.qty, 0),
    [items],
  )
  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.qty, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem,
      removeItem,
      updateQty,
      clearCart,
    }),
    [items, count, subtotal, isOpen],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
