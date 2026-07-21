import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { getProduct } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart-v1'

function cartReducer(state, action) {
  switch (action.type) {
    case 'add': {
      const { productId, variant, qty } = action
      const key = `${productId}::${variant}`
      const existing = state.find((l) => l.key === key)
      if (existing) {
        return state.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l))
      }
      return [...state, { key, productId, variant, qty }]
    }
    case 'remove':
      return state.filter((l) => l.key !== action.key)
    case 'setQty': {
      if (action.qty <= 0) return state.filter((l) => l.key !== action.key)
      return state.map((l) => (l.key === action.key ? { ...l, qty: action.qty } : l))
    }
    case 'clear':
      return []
    default:
      return state
  }
}

function loadInitial() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed)
      ? parsed.filter((l) => l && getProduct(l.productId))
      : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(cartReducer, undefined, loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* storage unavailable */
    }
  }, [lines])

  const value = useMemo(() => {
    const detailed = lines.map((l) => ({ ...l, product: getProduct(l.productId) }))
    const count = detailed.reduce((sum, l) => sum + l.qty, 0)
    const subtotal = detailed.reduce((sum, l) => sum + l.qty * l.product.price, 0)
    return {
      lines: detailed,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (productId, variant = 'Gold', qty = 1) =>
        dispatch({ type: 'add', productId, variant, qty }),
      removeItem: (key) => dispatch({ type: 'remove', key }),
      setQty: (key, qty) => dispatch({ type: 'setQty', key, qty }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [lines, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
