import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // silently fail
  }
}

function cartReducer(state, action) {
  let next

  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((i) => i.id === action.item.id)
      if (existing) {
        next = state.map((i) =>
          i.id === action.item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      } else {
        next = [...state, { ...action.item, quantity: 1 }]
      }
      break
    }
    case 'REMOVE_ITEM':
      next = state.filter((i) => i.id !== action.id)
      break
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        next = state.filter((i) => i.id !== action.id)
      } else {
        next = state.map((i) =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i
        )
      }
      break
    case 'CLEAR_CART':
      next = []
      break
    default:
      return state
  }

  saveCart(next)
  return next
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart)

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', item })
  }, [])

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', id })
  }, [])

  const updateQuantity = useCallback((id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)

  const value = {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}