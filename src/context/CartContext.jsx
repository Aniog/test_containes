import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)
const CartDispatch = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(
        (i) => i.id === action.product.id && i.variant === action.variant
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.product.id && i.variant === action.variant
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.product, variant: action.variant, quantity: 1 }],
      }
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.id && i.variant === action.variant)
        ),
      }
    case 'UPDATE_QTY': {
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.id === action.id && i.variant === action.variant)
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id && i.variant === action.variant
            ? { ...i, quantity: action.quantity }
            : i
        ),
      }
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

  const addToCart = useCallback((product, variant = 'Gold') => {
    dispatch({ type: 'ADD', product, variant })
    dispatch({ type: 'OPEN_DRAWER' })
  }, [])

  const removeFromCart = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE', id, variant })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QTY', id, variant, quantity })
  }, [])

  const toggleDrawer = useCallback(() => dispatch({ type: 'TOGGLE_DRAWER' }), [])
  const openDrawer = useCallback(() => dispatch({ type: 'OPEN_DRAWER' }), [])
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [])

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const value = {
    ...state,
    itemCount,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleDrawer,
    openDrawer,
    closeDrawer,
  }

  return (
    <CartContext.Provider value={value}>
      <CartDispatch.Provider value={dispatch}>
        {children}
      </CartDispatch.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}