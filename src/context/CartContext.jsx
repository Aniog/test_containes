import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext()

const CART_ACTIONS = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  UPDATE_QTY: 'UPDATE_QTY',
  CLEAR: 'CLEAR',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  OPEN_DRAWER: 'OPEN_DRAWER',
  CLOSE_DRAWER: 'CLOSE_DRAWER',
}

function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.ADD: {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
          drawerOpen: true,
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
        drawerOpen: true,
      }
    }
    case CART_ACTIONS.REMOVE:
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      }
    case CART_ACTIONS.UPDATE_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    case CART_ACTIONS.CLEAR:
      return { ...state, items: [] }
    case CART_ACTIONS.TOGGLE_DRAWER:
      return { ...state, drawerOpen: !state.drawerOpen }
    case CART_ACTIONS.OPEN_DRAWER:
      return { ...state, drawerOpen: true }
    case CART_ACTIONS.CLOSE_DRAWER:
      return { ...state, drawerOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    drawerOpen: false,
  })

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({
      type: CART_ACTIONS.ADD,
      payload: {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      },
    })
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: CART_ACTIONS.REMOVE, payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QTY, payload: { id, variant, quantity } })
  }, [])

  const openDrawer = useCallback(() => dispatch({ type: CART_ACTIONS.OPEN_DRAWER }), [])
  const closeDrawer = useCallback(() => dispatch({ type: CART_ACTIONS.CLOSE_DRAWER }), [])
  const clearCart = useCallback(() => dispatch({ type: CART_ACTIONS.CLEAR }), [])

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        drawerOpen: state.drawerOpen,
        totalItems,
        subtotal,
        addItem,
        removeItem,
        updateQuantity,
        openDrawer,
        closeDrawer,
        clearCart,
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
