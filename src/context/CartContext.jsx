import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const saveCart = (items) => {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  } catch {}
}

const loadCart = () => {
  try {
    const raw = localStorage.getItem('velmora-cart')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  let next
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (i) => i.id === action.payload.id && i.color === action.payload.color
      )
      if (existing) {
        next = state.map((i) =>
          i.id === action.payload.id && i.color === action.payload.color
            ? { ...i, quantity: i.quantity + (action.payload.quantity || 1) }
            : i
        )
      } else {
        next = [...state, { ...action.payload, quantity: action.payload.quantity || 1 }]
      }
      break
    }
    case 'REMOVE_ITEM':
      next = state.filter((i) => !(i.id === action.payload.id && i.color === action.payload.color))
      break
    case 'UPDATE_QUANTITY':
      next = state.map((i) =>
        i.id === action.payload.id && i.color === action.payload.color
          ? { ...i, quantity: Math.max(1, action.payload.quantity) }
          : i
      )
      break
    case 'CLEAR':
      next = []
      break
    default:
      return state
  }
  saveCart(next)
  return next
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart)

  const addItem = useCallback((product, color = 'Gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.bg || 'from-amber-800 via-amber-700 to-amber-900',
        color,
        quantity,
      },
    })
  }, [])

  const removeItem = useCallback((id, color) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, color } })
  }, [])

  const updateQuantity = useCallback((id, color, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, color, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, itemCount, subtotal, addItem, removeItem, updateQuantity, clearCart }}
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