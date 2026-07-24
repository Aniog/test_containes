import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext()

const STORAGE_KEY = 'velmora-cart'

const loadCart = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveCart = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Silently fail
  }
}

function cartReducer(state, action) {
  let newState
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existing) {
        newState = state.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        newState = [...state, { ...action.payload }]
      }
      break
    }
    case 'REMOVE_ITEM':
      newState = state.filter(
        (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
      )
      break
    case 'UPDATE_QUANTITY':
      newState = state.map((item) =>
        item.id === action.payload.id && item.variant === action.payload.variant
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      break
    case 'CLEAR':
      newState = []
      break
    default:
      return state
  }
  saveCart(newState)
  return newState
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        imgId: product.imgId,
      },
    })
  }, [])

  const removeItem = useCallback((id, variant = 'gold') => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    if (quantity < 1) return
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
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
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}