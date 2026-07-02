import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext()

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
  } catch { /* ignore quota errors */ }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      )
      if (existing) {
        return state.map((i) =>
          i.id === existing.id && i.variant === existing.variant
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        )
      }
      return [...state, { ...action.payload }]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
      )
    case 'UPDATE_QUANTITY':
      return state
        .map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        )
        .filter((i) => i.quantity > 0)
    case 'CLEAR_CART':
      return []
    case 'LOAD_CART':
      return action.payload
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  // Persist to localStorage on change
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

  const removeItem = useCallback((id, variant = 'gold') => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
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