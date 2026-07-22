import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

function readStored() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// A line item is { id, productId, name, price, tone, qty, imgId, titleId, descId }
// The line `id` uniquely identifies a variant (productId + tone).

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStored)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const addItem = (product, { tone, qty = 1 } = {}) => {
    const chosenTone = tone || product.tones[0]
    const lineId = `${product.id}__${chosenTone}`
    setItems((prev) => {
      const existing = prev.find((i) => i.id === lineId)
      if (existing) {
        return prev.map((i) =>
          i.id === lineId ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [
        ...prev,
        {
          id: lineId,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone: chosenTone,
          qty,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (lineId) => {
    setItems((prev) => prev.filter((i) => i.id !== lineId))
  }

  const updateQty = (lineId, qty) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === lineId ? { ...i, qty: Math.max(0, qty) } : i))
        .filter((i) => i.qty > 0)
    )
  }

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.qty * i.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQty,
    }),
    [items, count, subtotal, isOpen]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
