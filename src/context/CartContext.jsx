import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = `${action.payload.id}-${action.payload.variant}`
      const existing = state.items[key]
      if (existing) {
        return {
          ...state,
          items: { ...state.items, [key]: { ...existing, quantity: existing.quantity + action.payload.quantity } },
        }
      }
      return {
        ...state,
        items: { ...state.items, [key]: action.payload },
      }
    }
    case 'REMOVE_ITEM': {
      const { [action.payload]: _, ...rest } = state.items
      return { ...state, items: rest }
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        const { [action.payload.key]: _, ...rest } = state.items
        return { ...state, items: rest }
      }
      return {
        ...state,
        items: { ...state.items, [action.payload.key]: { ...state.items[action.payload.key], quantity: action.payload.quantity } },
      }
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {}, isOpen: false })

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.name, price: product.price, variant, quantity, image: product.images[0] },
    })
    dispatch({ type: 'OPEN_CART' })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: key })
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } })
  }, [])

  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [])

  const itemCount = Object.values(state.items).reduce((sum, item) => sum + item.quantity, 0)
  const total = Object.values(state.items).reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, toggleCart, openCart, closeCart, itemCount, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
