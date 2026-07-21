import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from 'react'
import { PRODUCTS, getProductById } from '@/data/products'

const STORAGE_KEY = 'velmora.cart.v1'

const CartContext = createContext(null)

function readStored() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

function writeStored(items) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    /* noop */
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      return action.items || []
    case 'add': {
      const { id, qty, variant } = action
      const key = `${id}__${variant || 'default'}`
      const existing = state.find((it) => it.key === key)
      if (existing) {
        return state.map((it) =>
          it.key === key ? { ...it, qty: it.qty + qty } : it
        )
      }
      return [...state, { key, id, qty, variant: variant || 'default' }]
    }
    case 'setQty': {
      const { key, qty } = action
      if (qty <= 0) return state.filter((it) => it.key !== key)
      return state.map((it) => (it.key === key ? { ...it, qty } : it))
    }
    case 'remove':
      return state.filter((it) => it.key !== action.key)
    case 'clear':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [])
  const [hydrated, setHydrated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(null)

  useEffect(() => {
    dispatch({ type: 'hydrate', items: readStored() })
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) writeStored(items)
  }, [items, hydrated])

  const addItem = useCallback((id, qty = 1, variant = 'default') => {
    dispatch({ type: 'add', id, qty, variant })
    setJustAdded(id)
    window.setTimeout(() => setJustAdded(null), 1800)
  }, [])

  const setQty = useCallback((key, qty) => {
    dispatch({ type: 'setQty', key, qty })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'remove', key })
  }, [])

  const clear = useCallback(() => {
    dispatch({ type: 'clear' })
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const decoratedItems = useMemo(
    () =>
      items
        .map((it) => {
          const product = getProductById(it.id) || PRODUCTS.find((p) => p.id === it.id)
          if (!product) return null
          return { ...it, product, lineTotal: product.price * it.qty }
        })
        .filter(Boolean),
    [items]
  )

  const subtotal = useMemo(
    () => decoratedItems.reduce((sum, it) => sum + it.lineTotal, 0),
    [decoratedItems]
  )

  const itemCount = useMemo(
    () => decoratedItems.reduce((sum, it) => sum + it.qty, 0),
    [decoratedItems]
  )

  const value = {
    items: decoratedItems,
    rawItems: items,
    subtotal,
    itemCount,
    hydrated,
    isOpen,
    justAdded,
    addItem,
    setQty,
    removeItem,
    clear,
    openCart,
    closeCart,
    toggleCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
