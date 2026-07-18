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

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, tone, quantity = 1 } = action
      const key = `${product.id}__${tone}`
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
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
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    }
    case 'REMOVE':
      return state.filter((i) => i.key !== action.key)
    case 'SET_QTY': {
      if (action.quantity <= 0) return state.filter((i) => i.key !== action.key)
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
  const [items, dispatch] = useReducer(cartReducer, undefined, loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = (product, tone, quantity = 1) => {
    dispatch({ type: 'ADD', product, tone, quantity })
    setIsOpen(true)
  }
  const removeItem = (key) => dispatch({ type: 'REMOVE', key })
  const setQuantity = (key, quantity) => dispatch({ type: 'SET_QTY', key, quantity })
  const clear = () => dispatch({ type: 'CLEAR' })
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const count = useMemo(() => items.reduce((n, i) => n + i.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((n, i) => n + i.quantity * i.price, 0),
    [items]
  )

  const value = {
    items,
    count,
    subtotal,
    isOpen,
    addItem,
    removeItem,
    setQuantity,
    clear,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
