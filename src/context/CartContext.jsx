import { createContext, useContext, useEffect, useReducer, useState, useCallback, useMemo } from 'react'
import { getProductById } from '@/data/products'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora_cart_v1'

function readInitial() {
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

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { productId, variant, quantity = 1 } = action
      const key = `${productId}__${variant}`
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...state, { key, productId, variant, quantity }]
    }
    case 'REMOVE': {
      return state.filter((i) => i.key !== action.key)
    }
    case 'SET_QTY': {
      const { key, quantity } = action
      if (quantity <= 0) return state.filter((i) => i.key !== key)
      return state.map((i) => (i.key === key ? { ...i, quantity } : i))
    }
    case 'CLEAR':
      return []
    case 'INIT':
      return action.payload || []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], readInitial)
  const [isOpen, setIsOpen] = useState()

  // Persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const addItem = useCallback((productId, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD', productId, variant, quantity })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', key })
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'SET_QTY', key, quantity })
  }, [])

  const clear = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  // Hydrate items with product data
  const hydrated = useMemo(
    () =>
      items
        .map((i) => {
          const product = getProductById(i.productId)
          if (!product) return null
          const variant = i.variant
          return { ...i, product, lineTotal: product.price * i.quantity }
        })
        .filter(Boolean),
    [items]
  )

  const itemCount = useMemo(
    () => hydrated.reduce((sum, i) => sum + i.quantity, 0),
    [hydrated]
  )

  const subtotal = useMemo(
    () => hydrated.reduce((sum, i) => sum + i.lineTotal, 0),
    [hydrated]
  )

  const value = useMemo(
    () => ({
      items: hydrated,
      rawItems: items,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
      toggleCart,
    }),
    [hydrated, items, itemCount, subtotal, isOpen, addItem, removeItem, setQuantity, clear, openCart, closeCart, toggleCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
