import { createContext, useContext, useReducer, useCallback } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)
const CartDispatchContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(
        i => i.productId === action.productId && i.variant === action.variant
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map(i =>
            i.productId === action.productId && i.variant === action.variant
              ? { ...i, quantity: i.quantity + action.quantity }
              : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, {
          productId: action.productId,
          variant: action.variant,
          quantity: action.quantity,
        }],
      }
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter(
          i => !(i.productId === action.productId && i.variant === action.variant)
        ),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.productId === action.productId && i.variant === action.variant
            ? { ...i, quantity: Math.max(0, action.quantity) }
            : i
        ).filter(i => i.quantity > 0),
      }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

const initialState = { items: [] }

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const getCartItem = useCallback((productId, variant) => {
    return state.items.find(
      i => i.productId === productId && i.variant === variant
    )
  }, [state.items])

  const addToCart = useCallback((productId, variant = 'Gold', quantity = 1) => {
    dispatch({ type: 'ADD', productId, variant, quantity })
  }, [])

  const removeFromCart = useCallback((productId, variant) => {
    dispatch({ type: 'REMOVE', productId, variant })
  }, [])

  const updateQuantity = useCallback((productId, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, variant, quantity })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const getProduct = useCallback((productId) => {
    return products.find(p => p.id === productId)
  }, [])

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0)

  const subtotal = state.items.reduce((sum, i) => {
    const product = getProduct(i.productId)
    return sum + (product ? product.price * i.quantity : 0)
  }, 0)

  return (
    <CartContext.Provider value={{
      items: state.items,
      totalItems,
      subtotal,
      getCartItem,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getProduct,
    }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
