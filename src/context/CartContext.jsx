import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
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
          image: action.product.images?.[0] || '',
          variant: action.variant || 'gold',
          quantity: action.quantity || 1,
        },
      ]
    }
    case 'REMOVE_ITEM':
      return state.filter((_, index) => index !== action.index)
    case 'UPDATE_QUANTITY':
      return state.map((item, index) =>
        index === action.index
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
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', product, variant, quantity })
  }

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', index })
  }

  const updateQuantity = (index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', index, quantity })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}