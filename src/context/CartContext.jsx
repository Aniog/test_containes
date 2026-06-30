import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.productId === action.payload.productId && item.variant === action.payload.variant
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload.productId && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        }
      }
      return { ...state, items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.productId === action.payload.productId && item.variant === action.payload.variant)
        ),
      }
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.productId === action.payload.productId && item.variant === action.payload.variant)
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        productId: product.id,
        name: product.name,
        price: product.price,
        variant,
        quantity,
        image: product.images[0],
      },
    })
  }, [])

  const removeItem = useCallback((productId, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } })
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } })
  }, [])

  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), [])
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), [])
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), [])

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ ...state, addItem, removeItem, updateQuantity, toggleCart, closeCart, openCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
