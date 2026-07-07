import React, { createContext, useContext, useReducer, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(item => item.id === action.payload.id && item.variant === action.payload.variant)
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      }
      return [...state, { ...action.payload }]
    }
    case 'REMOVE_ITEM':
      return state.filter(item => !(item.id === action.payload.id && item.variant === action.payload.variant))
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id && item.variant === action.payload.variant
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
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
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      },
    })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
    }
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const total = state.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = state.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items: state,
      isDrawerOpen,
      setIsDrawerOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total,
      itemCount,
    }}>
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
