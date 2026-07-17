import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

const loadCart = () => {
  try {
    const saved = localStorage.getItem('velmora-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.color === action.payload.color
      )
      if (existing) {
        return state.map((item) =>
          item.id === existing.id && item.color === existing.color
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: action.payload.quantity }]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.payload.id && item.color === action.payload.color)
      )
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id && item.color === action.payload.color
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify(cart))
    } catch {
      // localStorage may be full or unavailable
    }
  }, [cart])

  const addItem = useCallback(
    (item) => {
      dispatch({ type: 'ADD_ITEM', payload: item })
    },
    []
  )

  const removeItem = useCallback((id, color) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, color } })
  }, [])

  const updateQuantity = useCallback((id, color, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, color, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
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