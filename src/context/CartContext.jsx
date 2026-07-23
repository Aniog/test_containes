import { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v2'

function loadInitial() {
  if (typeof window === 'undefined') return { items: [], isOpen: false }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      return { items: parsed.items || [], isOpen: false }
    }
  } catch (e) {
    console.warn('Cart hydrate failed', e)
  }
  return { items: [], isOpen: false }
}

function sameLine(a, b) {
  return a.id === b.id && a.tone === b.tone
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((it) => sameLine(it, action.item))
      const items = existing
        ? state.items.map((it) =>
            sameLine(it, action.item)
              ? { ...it, qty: it.qty + action.item.qty }
              : it,
          )
        : [...state.items, action.item]
      return { ...state, items, isOpen: true }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((it) => it.lineId !== action.lineId) }
    case 'SET_QTY':
      return {
        ...state,
        items: state.items
          .map((it) =>
            it.lineId === action.lineId ? { ...it, qty: action.qty } : it,
          )
          .filter((it) => it.qty > 0),
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }))
    } catch (e) {
      console.warn('Cart persist failed', e)
    }
  }, [state.items])

  const addItem = useCallback((item) => dispatch({ type: 'ADD', item }), [])
  const removeItem = useCallback((lineId) => dispatch({ type: 'REMOVE', lineId }), [])
  const setQty = useCallback((lineId, qty) => dispatch({ type: 'SET_QTY', lineId, qty }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), [])
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const count = useMemo(() => state.items.reduce((n, it) => n + it.qty, 0), [state.items])
  const subtotal = useMemo(
    () => state.items.reduce((sum, it) => sum + it.price * it.qty, 0),
    [state.items],
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
    [state.items, state.isOpen, count, subtotal, addItem, removeItem, setQty, openCart, closeCart, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
