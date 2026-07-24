import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from 'react'
import { getProductById } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart-v1'

const loadInitialItems = () => {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter(
        (item) =>
          item &&
          typeof item.productId === 'string' &&
          getProductById(item.productId) &&
          Number.isFinite(item.quantity) &&
          item.quantity > 0
      )
      .map((item) => ({
        productId: item.productId,
        variant: item.variant === 'silver' ? 'silver' : 'gold',
        quantity: Math.min(99, Math.max(1, Math.round(item.quantity))),
      }))
  } catch {
    return []
  }
}

const cartReducer = (items, action) => {
  switch (action.type) {
    case 'add': {
      const key = (i) => `${i.productId}:${i.variant}`
      const incoming = { productId: action.productId, variant: action.variant, quantity: action.quantity }
      const existing = items.find((i) => key(i) === key(incoming))
      if (existing) {
        return items.map((i) =>
          key(i) === key(incoming)
            ? { ...i, quantity: Math.min(99, i.quantity + action.quantity) }
            : i
        )
      }
      return [...items, incoming]
    }
    case 'setQuantity': {
      if (action.quantity <= 0) {
        return items.filter((i) => !(i.productId === action.productId && i.variant === action.variant))
      }
      return items.map((i) =>
        i.productId === action.productId && i.variant === action.variant
          ? { ...i, quantity: Math.min(99, action.quantity) }
          : i
      )
    }
    case 'remove':
      return items.filter((i) => !(i.productId === action.productId && i.variant === action.variant))
    case 'clear':
      return []
    default:
      return items
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadInitialItems)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage unavailable — cart still works in-memory
    }
  }, [items])

  const showToast = useCallback((message) => {
    const id = `toast-${Date.now()}-${Math.round(Math.random() * 1e5)}`
    setToasts((current) => [...current.slice(-2), { id, message }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((t) => t.id !== id))
    }, 2600)
  }, [])

  const addItem = useCallback((productId, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'add', productId, variant, quantity })
    const product = getProductById(productId)
    showToast(`${product ? product.shortName : 'Item'} added to your cart`)
  }, [showToast])

  const setQuantity = useCallback((productId, variant, quantity) => {
    dispatch({ type: 'setQuantity', productId, variant, quantity })
  }, [])

  const removeItem = useCallback((productId, variant) => {
    dispatch({ type: 'remove', productId, variant })
  }, [])

  const value = useMemo(() => {
    const detailed = items.map((item) => ({
      ...item,
      product: getProductById(item.productId),
      lineTotal: getProductById(item.productId).price * item.quantity,
    }))
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = detailed.reduce((sum, i) => sum + i.lineTotal, 0)
    return {
      items: detailed,
      count,
      subtotal,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      addItem,
      setQuantity,
      removeItem,
      clearCart: () => dispatch({ type: 'clear' }),
      toasts,
    }
  }, [items, isCartOpen, addItem, setQuantity, removeItem, toasts])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
