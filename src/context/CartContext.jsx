import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity } = action.payload
      const key = `${product.id}-${variant}`
      const existing = state.items.find((i) => i.key === key)

      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        }
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            product,
            variant,
            quantity,
          },
        ],
      }
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.payload),
      }
    }

    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.key !== key),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === key ? { ...i, quantity } : i
        ),
      }
    }

    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen }

    case 'SET_DRAWER':
      return { ...state, drawerOpen: action.payload }

    default:
      return state
  }
}

const initialState = {
  items: [],
  drawerOpen: false,
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: key })
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } })
  }, [])

  const toggleDrawer = useCallback(() => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  }, [])

  const setDrawer = useCallback((open) => {
    dispatch({ type: 'SET_DRAWER', payload: open })
  }, [])

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  )

  const value = {
    items: state.items,
    drawerOpen: state.drawerOpen,
    totalItems,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    toggleDrawer,
    setDrawer,
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
