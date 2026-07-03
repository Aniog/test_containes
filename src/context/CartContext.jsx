import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'velmora.cart.v1'

const CartContext = createContext(null)

const readStored = () => {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeStored = (items) => {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    /* ignore quota / privacy errors */
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStored)
  const [isOpen, setIsOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(null)

  useEffect(() => {
    writeStored(items)
  }, [items])

  const addItem = useCallback((product, options = {}) => {
    const variant = options.variant || (product.colors?.[0] || 'gold')
    const qty = options.quantity || 1
    setItems((current) => {
      const idx = current.findIndex(
        (i) => i.id === product.id && i.variant === variant,
      )
      if (idx >= 0) {
        const next = [...current]
        next[idx] = { ...next[idx], quantity: next[idx].quantity + qty }
        return next
      }
      return [
        ...current,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          art: product.art,
          variant,
          quantity: qty,
        },
      ]
    })
    setJustAdded({ id: product.id, ts: Date.now() })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, variant) => {
    setItems((current) =>
      current.filter((i) => !(i.id === id && i.variant === variant)),
    )
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((i) => !(i.id === id && i.variant === variant))
      }
      return current.map((i) =>
        i.id === id && i.variant === variant ? { ...i, quantity } : i,
      )
    })
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      justAdded,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      openCart,
      closeCart,
    }
  }, [items, isOpen, justAdded, addItem, removeItem, updateQuantity, clear, openCart, closeCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used inside a CartProvider')
  }
  return ctx
}
