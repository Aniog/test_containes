import { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora_cart_v1'

const initialState = {
  items: [], // { key, productId, name, price, tone, qty, imageQueryIds }
  isOpen: false,
}

function loadInitial() {
  if (typeof window === 'undefined') return initialState
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState
    const parsed = JSON.parse(raw)
    return { ...initialState, items: Array.isArray(parsed?.items) ? parsed.items : [] }
  } catch {
    return initialState
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, tone, qty = 1 } = action
      const key = `${product.id}__${tone}`
      const existing = state.items.find((i) => i.key === key)
      let items
      if (existing) {
        items = state.items.map((i) =>
          i.key === key ? { ...i, qty: i.qty + qty } : i
        )
      } else {
        items = [
          ...state.items,
          {
            key,
            productId: product.id,
            name: product.name,
            price: product.price,
            tone,
            qty,
          },
        ]
      }
      return { ...state, items, isOpen: true }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.key !== action.key) }
    case 'SET_QTY': {
      const { key, qty } = action
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) }
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, qty } : i)),
      }
    }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }))
    } catch {
      /* ignore */
    }
  }, [state.items])

  const addItem = useCallback((product, tone, qty = 1) => {
    dispatch({ type: 'ADD', product, tone, qty })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', key })
  }, [])

  const setQty = useCallback((key, qty) => {
    dispatch({ type: 'SET_QTY', key, qty })
  }, [])

  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), [])
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const count = useMemo(() => state.items.reduce((n, i) => n + i.qty, 0), [state.items])
  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [state.items]
  )

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      count,
      subtotal,
      addItem,
      removeItem,
      setQty,
      openCart,
      closeCart,
      clearCart,
    }),
    [state.items, state.isOpen, count, subtotal, addItem, removeItem, setQty, openCart, closeCart, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
