import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)
const CartDispatchContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.variant === action.payload.variant
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload.productId &&
            item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.productId === action.payload.productId &&
              item.variant === action.payload.variant
            )
        ),
      }
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) =>
              !(
                item.productId === action.payload.productId &&
                item.variant === action.payload.variant
              )
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId &&
          item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: action.payload ?? !state.isOpen }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  })

  return (
    <CartContext.Provider value={state}>
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

export function useCartDispatch() {
  const ctx = useContext(CartDispatchContext)
  if (!ctx) throw new Error('useCartDispatch must be used within CartProvider')
  return ctx
}

export function useCartActions() {
  const dispatch = useCartDispatch()

  const addItem = useCallback(
    (productId, product, variant, quantity = 1) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          productId,
          name: product.name,
          price: product.price,
          variant,
          image: product.images.front.hex,
          slug: product.slug,
          quantity,
        },
      })
    },
    [dispatch]
  )

  const removeItem = useCallback(
    (productId, variant) => {
      dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } })
    },
    [dispatch]
  )

  const updateQuantity = useCallback(
    (productId, variant, quantity) => {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { productId, variant, quantity },
      })
    },
    [dispatch]
  )

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [dispatch])

  const toggleCart = useCallback(
    (open) => {
      dispatch({ type: 'TOGGLE_CART', payload: open })
    },
    [dispatch]
  )

  return { addItem, removeItem, updateQuantity, clearCart, toggleCart }
}
