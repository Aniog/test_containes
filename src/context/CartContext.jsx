import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {}
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existing) {
        return state.map((item) =>
          item.id === existing.id && item.variant === existing.variant
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity }]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
      )
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return state.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        )
      }
      return state.map((item) =>
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
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  React.useEffect(() => {
    saveCart(items)
  }, [items])

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
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
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}