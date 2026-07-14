import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

const initialState = {
  items: [], // { key, productId, slug, name, price, tone, quantity, image, imgId, alt }
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
      const { product, tone, quantity = 1 } = action.payload
      const key = `${product.id}-${tone}`
      const existing = state.items.find((i) => i.key === key)
      let items
      if (existing) {
        items = state.items.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      } else {
        items = [
          ...state.items,
          {
            key,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            tone,
            quantity,
            imgId: product.images[0]?.imgId,
            alt: product.images[0]?.alt,
          },
        ]
      }
      return { ...state, items, isOpen: true }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter((i) => i.key !== action.payload.key) }
    case 'SET_QTY': {
      const { key, quantity } = action.payload
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) }
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, quantity } : i)),
      }
    }
    case 'OPEN':
      return { ...state, isOpen: true }
    case 'CLOSE':
      return { ...state, isOpen: false }
    case 'TOGGLE':
      return { ...state, isOpen: !state.isOpen }
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
      // ignore
    }
  }, [state.items])

  const addItem = useCallback((product, tone, quantity = 1) => {
    dispatch({ type: 'ADD', payload: { product, tone, quantity } })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', payload: { key } })
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'SET_QTY', payload: { key, quantity } })
  }, [])

  const openCart = useCallback(() => dispatch({ type: 'OPEN' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE' }), [])
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE' }), [])

  const count = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    count,
    subtotal,
    addItem,
    removeItem,
    setQuantity,
    openCart,
    closeCart,
    toggleCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
