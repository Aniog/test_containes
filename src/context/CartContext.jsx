import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const loadCart = () => {
  try {
    const saved = localStorage.getItem('velmora-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveCart = (items) => {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  } catch { /* ignore */ }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.product.id)
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.product, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id)
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  const syncedDispatch = useCallback((action) => {
    dispatch(action)
  }, [])

  const addItem = useCallback((product) => {
    syncedDispatch({ type: 'ADD_ITEM', product })
  }, [syncedDispatch])

  const removeItem = useCallback((id) => {
    syncedDispatch({ type: 'REMOVE_ITEM', id })
  }, [syncedDispatch])

  const updateQuantity = useCallback((id, quantity) => {
    syncedDispatch({ type: 'UPDATE_QUANTITY', id, quantity })
  }, [syncedDispatch])

  const clearCart = useCallback(() => {
    syncedDispatch({ type: 'CLEAR' })
  }, [syncedDispatch])

  // Persist to localStorage
  const prevItems = items
  saveCart(prevItems)

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}