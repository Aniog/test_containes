import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existingIndex >= 0) {
        const updated = [...state.items]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + (action.payload.quantity || 1),
        }
        return { ...state, items: updated }
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }] }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((_, i) => i !== action.payload) }
    case 'UPDATE_QUANTITY': {
      const updated = [...state.items]
      updated[action.payload.index] = { ...updated[action.payload.index], quantity: action.payload.quantity }
      return { ...state, items: updated }
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const addItem = (product, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, variant, quantity } })
    dispatch({ type: 'TOGGLE_CART' })
  }

  const removeItem = (index) => dispatch({ type: 'REMOVE_ITEM', payload: index })
  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) {
      removeItem(index)
      return
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } })
  }
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' })
  const closeCart = () => dispatch({ type: 'CLOSE_CART' })

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, toggleCart, closeCart, itemCount, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
