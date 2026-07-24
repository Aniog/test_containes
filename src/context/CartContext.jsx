import { createContext, useContext, useReducer, useEffect, useMemo, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

const initialState = { items: [], isOpen: false }

function sameLine(a, b) {
  return a.id === b.id && a.tone === b.tone
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const incoming = action.item
      const existing = state.items.find((it) => sameLine(it, incoming))
      let items
      if (existing) {
        items = state.items.map((it) =>
          sameLine(it, incoming) ? { ...it, qty: it.qty + incoming.qty } : it,
        )
      } else {
        items = [...state.items, incoming]
      }
      return { ...state, items, isOpen: true }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((it) => it.lineId !== action.lineId) }
    case 'SET_QTY': {
      const items = state.items
        .map((it) => (it.lineId === action.lineId ? { ...it, qty: action.qty } : it))
        .filter((it) => it.qty > 0)
      return { ...state, items }
    }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'HYDRATE':
      return { ...state, items: action.items || [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed.items)) {
          dispatch({ type: 'HYDRATE', items: parsed.items })
        }
      }
    } catch (e) {
      console.warn('Cart hydrate failed', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }))
    } catch (e) {
      console.warn('Cart persist failed', e)
    }
  }, [state.items])

  const addItem = useCallback((product, { tone, qty = 1 } = {}) => {
    const chosenTone = tone || product.tones?.[0] || 'Gold'
    const lineId = `${product.id}-${chosenTone}`
    dispatch({
      type: 'ADD',
      item: {
        lineId,
        id: product.id,
        name: product.name,
        price: product.price,
        tone: chosenTone,
        qty,
        imgId: product.imgId,
        titleId: product.titleId,
        descId: product.descId,
      },
    })
  }, [])

  const removeItem = useCallback((lineId) => dispatch({ type: 'REMOVE', lineId }), [])
  const setQty = useCallback((lineId, qty) => dispatch({ type: 'SET_QTY', lineId, qty }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), [])
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE' }), [])
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
      toggleCart,
      clearCart,
    }),
    [state.items, state.isOpen, count, subtotal, addItem, removeItem, setQty, openCart, closeCart, toggleCart, clearCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
