import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

const initialState = {
  isOpen: false,
  items: [],
}

function readStoredItems() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  if (action.type === 'HYDRATE_ITEMS') {
    return {
      ...state,
      items: Array.isArray(action.payload) ? action.payload : [],
    }
  }

  if (action.type === 'ADD_ITEM') {
    const existingIndex = state.items.findIndex(
      (item) => item.slug === action.payload.slug && item.variant === action.payload.variant,
    )

    if (existingIndex >= 0) {
      const items = state.items.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item,
      )

      return { ...state, isOpen: true, items }
    }

    return {
      ...state,
      isOpen: true,
      items: [...state.items, action.payload],
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      items: state.items.filter((item) => item.key !== action.payload),
    }
  }

  if (action.type === 'UPDATE_QUANTITY') {
    return {
      ...state,
      items: state.items
        .map((item) =>
          item.key === action.payload.key
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    }
  }

  if (action.type === 'OPEN_CART') {
    return { ...state, isOpen: true }
  }

  if (action.type === 'CLOSE_CART') {
    return { ...state, isOpen: false }
  }

  return state
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    dispatch({ type: 'HYDRATE_ITEMS', payload: readStoredItems() })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    } catch {
      // Ignore storage failures in restricted preview environments.
    }
  }, [state.items])

  const value = useMemo(() => {
    const subtotal = state.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
    const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

    return {
      isOpen: state.isOpen,
      items: state.items,
      subtotal,
      itemCount,
      addItem: (product, quantity = 1, variant = 'Gold Tone') =>
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            key: `${product.slug}-${variant}`,
            slug: product.slug,
            name: product.name,
            price: product.price,
            category: product.category,
            variant,
            quantity,
          },
        }),
      removeItem: (key) => dispatch({ type: 'REMOVE_ITEM', payload: key }),
      updateQuantity: (key, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } }),
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
