import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

function loadInitial() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

// A cart line is uniquely identified by product id + selected tone.
function lineKey(id, tone) {
  return `${id}__${tone}`
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, tone, quantity } = action
      const key = lineKey(product.id, tone)
      const existing = state.find((l) => l.key === key)
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + quantity } : l
        )
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imgId: product.imgId,
        },
      ]
    }
    case 'REMOVE':
      return state.filter((l) => l.key !== action.key)
    case 'SET_QTY': {
      const { key, quantity } = action
      if (quantity <= 0) return state.filter((l) => l.key !== key)
      return state.map((l) => (l.key === key ? { ...l, quantity } : l))
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

  // Lock body scroll when drawer open
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  const value = useMemo(() => {
    const count = items.reduce((n, l) => n + l.quantity, 0)
    const subtotal = items.reduce((n, l) => n + l.quantity * l.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem: (product, tone, quantity = 1) => {
        dispatch({ type: 'ADD', product, tone, quantity })
        setIsOpen(true)
      },
      removeItem: (key) => dispatch({ type: 'REMOVE', key }),
      setQuantity: (key, quantity) => dispatch({ type: 'SET_QTY', key, quantity }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
