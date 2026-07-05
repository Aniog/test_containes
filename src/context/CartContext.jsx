import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const CART_STORAGE_KEY = 'velmora_cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {}
  return []
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
        (item) => item.id === action.payload.id && item.material === action.payload.material
      )
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id && item.material === action.payload.material
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.payload)
    case 'UPDATE_QUANTITY':
      return state.map((item, i) =>
        i === action.payload.index
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
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

  const addItem = (product, material) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, material } })
  }

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index })
  }

  const updateQuantity = (index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

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
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}