import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.color === action.payload.color
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === existing.id && i.color === existing.color
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.color === action.payload.color)
        ),
      }
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity < 1) return state
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.color === action.payload.color
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      }
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen }
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: true }
    case 'CLOSE_DRAWER':
      return { ...state, drawerOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    drawerOpen: false,
  })

  const addItem = useCallback((product, color = 'Gold') => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, color } })
    dispatch({ type: 'OPEN_DRAWER' })
  }, [])

  const removeItem = useCallback((id, color) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, color } })
  }, [])

  const updateQuantity = useCallback((id, color, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, color, quantity } })
  }, [])

  const toggleDrawer = useCallback(() => dispatch({ type: 'TOGGLE_DRAWER' }), [])
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [])

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        ...state,
        itemCount,
        subtotal,
        addItem,
        removeItem,
        updateQuantity,
        toggleDrawer,
        closeDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}