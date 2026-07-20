import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart-v1'

const initialState = {
  items: [], // { key, productId, name, price, variant, qty, imgId, imgQuery }
  isOpen: false,
}

function loadInitial() {
  if (typeof window === 'undefined') return initialState
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.items)) return initialState
    return { ...initialState, items: parsed.items }
  } catch {
    return initialState
  }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, variant, qty, imgQuery } = action.payload
      const key = `${product.id}__${variant}`
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
            variant,
            qty,
            imgId: product.imgId,
            imgQuery,
          },
        ]
      }
      return { ...state, items, isOpen: true }
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.payload.key),
      }
    case 'SET_QTY': {
      const { key, qty } = action.payload
      if (qty <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.key !== key),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === key ? { ...i, qty } : i
        ),
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
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ items: state.items })
      )
    } catch {
      // ignore persistence errors
    }
  }, [state.items])

  const value = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = state.items.reduce((sum, i) => sum + i.qty * i.price, 0)
    return {
      items: state.items,
      isOpen: state.isOpen,
      count,
      subtotal,
      add: (product, variant, qty = 1, imgQuery = '') =>
        dispatch({
          type: 'ADD',
          payload: { product, variant, qty, imgQuery },
        }),
      remove: (key) => dispatch({ type: 'REMOVE', payload: { key } }),
      setQty: (key, qty) =>
        dispatch({ type: 'SET_QTY', payload: { key, qty } }),
      open: () => dispatch({ type: 'OPEN' }),
      close: () => dispatch({ type: 'CLOSE' }),
      clear: () => dispatch({ type: 'CLEAR' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
