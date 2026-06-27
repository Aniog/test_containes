import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      }
    }
    case 'UPDATE_QUANTITY': {
      const { id, variant, quantity } = action.payload
      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.id === id && item.variant === variant)
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id && item.variant === variant ? { ...item, quantity } : item
        ),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.payload ?? !state.isOpen }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const addItem = useCallback(
    (product, variant) => dispatch({ type: 'ADD_ITEM', payload: { ...product, variant } }),
    []
  )

  const removeItem = useCallback(
    (id, variant) => dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } }),
    []
  )

  const updateQuantity = useCallback(
    (id, variant, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } }),
    []
  )

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), [])

  const toggleCart = useCallback(
    (force) => dispatch({ type: 'TOGGLE_CART', payload: force }),
    []
  )

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        ...state,
        itemCount,
        subtotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
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
