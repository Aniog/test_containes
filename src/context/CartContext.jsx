import { createContext, useContext, useReducer, useCallback, useMemo, useEffect } from 'react'

const CartContext = createContext(null)

// A cart line is uniquely identified by product id + chosen variant.
const lineKey = (productId, variant) => `${productId}__${variant}`

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, variant, quantity } = action
      const key = lineKey(product.id, variant)
      const existing = state.lines.find((l) => l.key === key)
      const lines = existing
        ? state.lines.map((l) =>
            l.key === key ? { ...l, quantity: l.quantity + quantity } : l,
          )
        : [
            ...state.lines,
            {
              key,
              productId: product.id,
              name: product.name,
              price: product.price,
              variant,
              quantity,
              imgId: product.imgId,
              titleId: product.titleId,
              descId: product.descId,
              shortDescription: product.shortDescription,
            },
          ]
      return { ...state, lines, isOpen: true }
    }
    case 'REMOVE': {
      const lines = state.lines.filter((l) => l.key !== action.key)
      return { ...state, lines }
    }
    case 'SET_QTY': {
      const lines = state.lines
        .map((l) =>
          l.key === action.key ? { ...l, quantity: Math.max(1, action.quantity) } : l,
        )
        .filter((l) => l.quantity > 0)
      return { ...state, lines }
    }
    case 'INCREMENT':
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.key === action.key ? { ...l, quantity: l.quantity + 1 } : l,
        ),
      }
    case 'DECREMENT':
      return {
        ...state,
        lines: state.lines
          .map((l) =>
            l.key === action.key ? { ...l, quantity: l.quantity - 1 } : l,
          )
          .filter((l) => l.quantity > 0),
      }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen }
    case 'CLEAR':
      return { ...state, lines: [] }
    default:
      return state
  }
}

const STORAGE_KEY = 'velmora-cart-v1'

function init() {
  if (typeof window === 'undefined') return { lines: [], isOpen: false }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed && Array.isArray(parsed.lines)) {
        return { lines: parsed.lines, isOpen: false }
      }
    }
  } catch {
    // ignore
  }
  return { lines: [], isOpen: false }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, init)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ lines: state.lines }))
    } catch {
      // ignore
    }
  }, [state.lines])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD', product, variant, quantity })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', key })
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'SET_QTY', key, quantity })
  }, [])

  const increment = useCallback((key) => {
    dispatch({ type: 'INCREMENT', key })
  }, [])

  const decrement = useCallback((key) => {
    dispatch({ type: 'DECREMENT', key })
  }, [])

  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), [])
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE' }), [])

  const { count, subtotal } = useMemo(() => {
    let count = 0
    let subtotal = 0
    for (const l of state.lines) {
      count += l.quantity
      subtotal += l.quantity * l.price
    }
    return { count, subtotal }
  }, [state.lines])

  const value = useMemo(
    () => ({
      lines: state.lines,
      isOpen: state.isOpen,
      count,
      subtotal,
      addItem,
      removeItem,
      setQuantity,
      increment,
      decrement,
      openCart,
      closeCart,
      toggleCart,
    }),
    [
      state.lines,
      state.isOpen,
      count,
      subtotal,
      addItem,
      removeItem,
      setQuantity,
      increment,
      decrement,
      openCart,
      closeCart,
      toggleCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
