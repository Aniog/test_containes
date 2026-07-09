import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [],
  isOpen: false,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id && i.variant === action.payload.variant
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
          isOpen: true,
        }
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        isOpen: true,
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
        ),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        ),
      }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }, [])

  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' })
  }, [])

  const openCart = useCallback(() => {
    dispatch({ type: 'OPEN_CART' })
  }, [])

  const closeCart = useCallback(() => {
    dispatch({ type: 'CLOSE_CART' })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        ...state,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}