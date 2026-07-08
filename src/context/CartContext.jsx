import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [],
  isDrawerOpen: false,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.variant === action.payload.variant
      )
      if (existingIndex >= 0) {
        const updated = [...state.items]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + action.payload.quantity,
        }
        return { ...state, items: updated }
      }
      return { ...state, items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.cartId !== action.payload),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'OPEN_DRAWER':
      return { ...state, isDrawerOpen: true }
    case 'CLOSE_DRAWER':
      return { ...state, isDrawerOpen: false }
    case 'TOGGLE_DRAWER':
      return { ...state, isDrawerOpen: !state.isDrawerOpen }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = useCallback((product, variant = 'Gold', quantity = 1) => {
    const cartId = `${product.id}-${variant}-${Date.now()}`
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        cartId,
        variant,
        quantity,
      },
    })
  }, [])

  const removeFromCart = useCallback((cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId })
  }, [])

  const updateQuantity = useCallback((cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const openDrawer = useCallback(() => dispatch({ type: 'OPEN_DRAWER' }), [])
  const closeDrawer = useCallback(() => dispatch({ type: 'CLOSE_DRAWER' }), [])
  const toggleDrawer = useCallback(() => dispatch({ type: 'TOGGLE_DRAWER' }), [])

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const value = {
    items: state.items,
    isDrawerOpen: state.isDrawerOpen,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
