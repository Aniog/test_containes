import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
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
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: !state.isOpen }
    case 'CLOSE_DRAWER':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const addItem = (product, variant = 'gold') => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, variant } })
  }

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity <= 0) {
      removeItem(id, variant)
      return
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }

  const toggleDrawer = () => dispatch({ type: 'TOGGLE_DRAWER' })
  const closeDrawer = () => dispatch({ type: 'CLOSE_DRAWER' })

  const count = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, updateQuantity, toggleDrawer, closeDrawer, count, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
