import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.material === action.payload.material
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === existing.id && item.material === existing.material
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.material === action.payload.material)
        ),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.material === action.payload.material
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
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
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  })

  const addItem = useCallback((product, material = 'gold') => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, material },
    })
  }, [])

  const removeItem = useCallback((id, material) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, material } })
  }, [])

  const updateQuantity = useCallback((id, material, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, material, quantity } })
  }, [])

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), [])
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [])

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
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
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}