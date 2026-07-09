import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart'

function canUseLocalStorage() {
  if (typeof window === 'undefined') {
    return false
  }

  try {
    return typeof window.localStorage !== 'undefined'
  } catch {
    return false
  }
}

function readStoredCart() {
  if (!canUseLocalStorage()) {
    return []
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)

    if (!raw) {
      return []
    }

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function persistCart(items) {
  if (!canUseLocalStorage()) {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Ignore storage write failures in restricted preview contexts.
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.findIndex((item) => item.lineId === action.payload.lineId)

      if (existing === -1) {
        return {
          ...state,
          isOpen: true,
          items: [...state.items, action.payload],
        }
      }

      return {
        ...state,
        isOpen: true,
        items: state.items.map((item, index) =>
          index === existing
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        ),
      }
    }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.lineId === action.payload.lineId
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item,
        ),
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.lineId !== action.payload.lineId),
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
  const [state, dispatch] = useReducer(cartReducer, {
    items: readStoredCart(),
    isOpen: false,
  })

  useEffect(() => {
    persistCart(state.items)
  }, [state.items])

  const value = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

    return {
      items: state.items,
      isOpen: state.isOpen,
      subtotal,
      totalItems,
      addItem: (product, quantity = 1, variant = 'Gold Tone') => {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            lineId: `${product.slug}-${variant}`,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            category: product.category,
            price: product.price,
            variant,
            quantity,
          },
        })
      },
      updateQuantity: (lineId, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { lineId, quantity } }),
      removeItem: (lineId) =>
        dispatch({ type: 'REMOVE_ITEM', payload: { lineId } }),
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
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
