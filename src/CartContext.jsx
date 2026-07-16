import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.color === action.payload.color
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id && i.color === action.payload.color
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        }
      }
      return { ...state, items: [...state.items, action.payload] }
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.id === action.payload.id && i.color === action.payload.color)
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.color === action.payload.color
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.color === action.payload.color)
        ),
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

function initCart() {
  try {
    const saved = localStorage.getItem('velmora-cart')
    return saved
      ? { ...JSON.parse(saved), isOpen: false }
      : { items: [], isOpen: false }
  } catch {
    return { items: [], isOpen: false }
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, initCart)

  // Persist to localStorage on each change
  useCallback(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify({ items: state.items }))
    } catch {}
  }, [state.items])

  const addItem = useCallback((item) => dispatch({ type: 'ADD_ITEM', payload: item }), [])
  const updateQuantity = useCallback(
    (id, color, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, color, quantity } }),
    []
  )
  const removeItem = useCallback(
    (id, color) => dispatch({ type: 'REMOVE_ITEM', payload: { id, color } }),
    []
  )
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [])

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        itemCount,
        subtotal,
        addItem,
        updateQuantity,
        removeItem,
        toggleCart,
        openCart,
        closeCart,
      }}
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