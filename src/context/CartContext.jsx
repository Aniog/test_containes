import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload
      const existingIndex = state.findIndex(
        (item) => item.product.id === product.id && item.variant === variant
      )
      if (existingIndex >= 0) {
        const updated = [...state]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }
      return [...state, { product, variant, quantity }]
    }
    case 'REMOVE_ITEM': {
      return state.filter((_, i) => i !== action.payload.index)
    }
    case 'UPDATE_QUANTITY': {
      const { index, quantity } = action.payload
      if (quantity <= 0) {
        return state.filter((_, i) => i !== index)
      }
      const updated = [...state]
      updated[index] = { ...updated[index], quantity }
      return updated
    }
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, [], loadCart)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { index } })
  }, [])

  const updateQuantity = useCallback((index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const openDrawer = useCallback(() => setIsDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])

  const totalItems = state.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const value = {
    items: state,
    totalItems,
    totalPrice,
    isDrawerOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openDrawer,
    closeDrawer,
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
