import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart-v1'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage unavailable — cart still works in-memory
    }
  }, [items])

  const addItem = (product, variant = 'gold', qty = 1) => {
    const key = `${product.slug}__${variant}`
    setItems((current) => {
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, qty: Math.min(i.qty + qty, 99) } : i
        )
      }
      return [
        ...current,
        {
          key,
          slug: product.slug,
          name: product.name,
          price: product.price,
          category: product.category,
          imageQuery: product.imageQuery,
          variant,
          qty,
        },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (key) => setItems((current) => current.filter((i) => i.key !== key))

  const updateQty = (key, qty) => {
    if (qty <= 0) return removeItem(key)
    setItems((current) => current.map((i) => (i.key === key ? { ...i, qty } : i)))
  }

  const clearCart = () => setItems([])

  const { count, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, i) => ({ count: acc.count + i.qty, subtotal: acc.subtotal + i.qty * i.price }),
      { count: 0, subtotal: 0 }
    )
  }, [items])

  const value = {
    items,
    count,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQty,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
