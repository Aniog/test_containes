import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CART_STORAGE_KEY = 'velmora-cart'

const CartContext = createContext(null)

function readStoredState() {
  if (typeof window === 'undefined') {
    return { items: [], isOpen: false }
  }

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    if (!stored) {
      return { items: [], isOpen: false }
    }

    const parsed = JSON.parse(stored)
    return {
      items: Array.isArray(parsed.items) ? parsed.items : [],
      isOpen: false,
    }
  } catch {
    return { items: [], isOpen: false }
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity, tone } = action.payload
      const key = `${product.id}-${tone}`
      const existingItem = state.items.find((item) => item.key === key)

      if (existingItem) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((item) =>
            item.key === key
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        }
      }

      return {
        ...state,
        isOpen: true,
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            slug: product.slug,
            name: product.name,
            type: product.type,
            price: product.price,
            tone,
            quantity,
          },
        ],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.key !== action.payload.key),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.key === action.payload.key
              ? {
                  ...item,
                  quantity: Math.max(1, action.payload.quantity),
                }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, readStoredState)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({ items: state.items }),
    )
  }, [state.items])

  const value = useMemo(() => {
    const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      items: state.items,
      isOpen: state.isOpen,
      cartCount,
      subtotal,
      addToCart: (product, options = {}) =>
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            product,
            quantity: options.quantity ?? 1,
            tone: options.tone ?? 'Gold tone',
          },
        }),
      removeFromCart: (key) =>
        dispatch({
          type: 'REMOVE_ITEM',
          payload: { key },
        }),
      updateQuantity: (key, quantity) =>
        dispatch({
          type: 'UPDATE_QUANTITY',
          payload: { key, quantity },
        }),
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
      toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    }
  }, [state.isOpen, state.items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
