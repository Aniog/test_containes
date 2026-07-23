import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { products as allProducts } from '@/data/products'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

function loadInitial() {
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

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { productId, tone, quantity } = action
      const key = `${productId}__${tone}`
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...state, { key, productId, tone, quantity }]
    }
    case 'REMOVE':
      return state.filter((i) => i.key !== action.key)
    case 'SET_QTY': {
      if (action.quantity <= 0) {
        return state.filter((i) => i.key !== action.key)
      }
      return state.map((i) =>
        i.key === action.key ? { ...i, quantity: action.quantity } : i
      )
    }
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const detailedItems = useMemo(() => {
    return items
      .map((i) => {
        const product = allProducts.find((p) => p.id === i.productId)
        if (!product) return null
        return { ...i, product }
      })
      .filter(Boolean)
  }, [items])

  const count = useMemo(
    () => detailedItems.reduce((sum, i) => sum + i.quantity, 0),
    [detailedItems]
  )
  const subtotal = useMemo(
    () => detailedItems.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [detailedItems]
  )

  const value = {
    items: detailedItems,
    count,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    toggleCart: () => setIsOpen((v) => !v),
    addItem: (productId, tone, quantity = 1) => {
      dispatch({ type: 'ADD', productId, tone, quantity })
      setIsOpen(true)
    },
    removeItem: (key) => dispatch({ type: 'REMOVE', key }),
    setQuantity: (key, quantity) =>
      dispatch({ type: 'SET_QTY', key, quantity }),
    clear: () => dispatch({ type: 'CLEAR' }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
