import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  return []
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {}
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.product.id && item.variant === action.variant
      )
      if (existing) {
        return state.map((item) =>
          item.id === action.product.id && item.variant === action.variant
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        )
      }
      return [
        ...state,
        {
          id: action.product.id,
          name: action.product.name,
          price: action.product.price,
          image: action.product.images[0],
          variant: action.variant,
          quantity: action.quantity,
        },
      ]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.id && item.variant === action.variant)
      )
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id && item.variant === action.variant
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart)

  // Persist to localStorage whenever items change
  useEffect(() => {
    saveCart(items)
  }, [items])

  const addItem = useCallback(
    (product, variant = 'Gold', quantity = 1) => {
      dispatch({ type: 'ADD_ITEM', product, variant, quantity })
    },
    []
  )

  const removeItem = useCallback(
    (id, variant = 'Gold') => {
      dispatch({ type: 'REMOVE_ITEM', id, variant })
    },
    []
  )

  const updateQuantity = useCallback(
    (id, variant, quantity) => {
      dispatch({ type: 'UPDATE_QUANTITY', id, variant, quantity })
    },
    []
  )

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
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