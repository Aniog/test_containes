import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, variant, quantity } = action.payload
      const key = `${product.id}-${variant}`
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { key, product, variant, quantity }],
      }
    }
    case 'REMOVE': {
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.payload.key),
      }
    }
    case 'UPDATE_QTY': {
      const { key, quantity } = action.payload
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) }
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, quantity } : i)),
      }
    }
    case 'TOGGLE_DRAWER':
      return { ...state, drawerOpen: !state.drawerOpen }
    case 'OPEN_DRAWER':
      return { ...state, drawerOpen: true }
    case 'CLOSE_DRAWER':
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

  const addToCart = useCallback((product, variant = 'Gold Tone', quantity = 1) => {
    dispatch({ type: 'ADD', payload: { product, variant, quantity } })
    dispatch({ type: 'OPEN_DRAWER' })
  }, [])

  const removeFromCart = useCallback((key) => {
    dispatch({ type: 'REMOVE', payload: { key } })
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QTY', payload: { key, quantity } })
  }, [])

  const toggleDrawer = useCallback(() => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  }, [])

  const closeDrawer = useCallback(() => {
    dispatch({ type: 'CLOSE_DRAWER' })
  }, [])

  const openDrawer = useCallback(() => {
    dispatch({ type: 'OPEN_DRAWER' })
  }, [])

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0)

  const value = {
    items: state.items,
    drawerOpen: state.drawerOpen,
    itemCount,
    subtotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleDrawer,
    closeDrawer,
    openDrawer,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}