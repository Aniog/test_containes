import { createContext, useContext, useReducer, useCallback, useEffect } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
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
            ? { ...item, quantity: item.quantity + (action.quantity || 1) }
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
          variant: action.variant || 'gold',
          quantity: action.quantity || 1,
        },
      ]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.id && item.variant === action.variant)
      )
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return state.filter(
          (item) => !(item.id === action.id && item.variant === action.variant)
        )
      }
      return state.map((item) =>
        item.id === action.id && item.variant === action.variant
          ? { ...item, quantity: action.quantity }
          : item
      )
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    saveCart(items)
  }, [items])

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, variant, quantity })
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', id, variant })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, variant, quantity })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
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