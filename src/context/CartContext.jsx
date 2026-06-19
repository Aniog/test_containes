import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (i) => i.id === action.item.id && i.variant === action.item.variant
      )
      if (existing) {
        return state.map((i) =>
          i.id === action.item.id && i.variant === action.item.variant
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...state, { ...action.item, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (i) => !(i.id === action.id && i.variant === action.variant)
      )
    case 'UPDATE_QUANTITY':
      if (action.quantity < 1) return state
      return state.map((i) =>
        i.id === action.id && i.variant === action.variant
          ? { ...i, quantity: action.quantity }
          : i
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', item })
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', id, variant })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, variant, quantity })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}