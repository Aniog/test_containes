import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext()

const storageKey = 'velmora-cart'

const loadCart = () => {
  try {
    const data = localStorage.getItem(storageKey)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const saveCart = (items) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(items))
  } catch { /* noop */ }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        item => item.id === action.product.id && item.variant === action.variant
      )
      if (existing) {
        return state.map(item =>
          item.id === existing.id && item.variant === existing.variant
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        )
      }
      return [...state, {
        id: action.product.id,
        name: action.product.name,
        price: action.product.price,
        variant: action.variant,
        quantity: action.quantity,
        imgId: action.product.imgId,
      }]
    }
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.id && item.variant === action.variant
          ? { ...item, quantity: Math.max(1, action.quantity) }
          : item
      )
    case 'REMOVE_ITEM':
      return state.filter(
        item => !(item.id === action.id && item.variant === action.variant)
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, null, loadCart)

  const saveAndDispatch = useCallback((action) => {
    const nextState = cartReducer(items, action)
    saveCart(nextState)
    dispatch(action)
  }, [items])

  const addItem = useCallback((product, variant = 'Gold', quantity = 1) => {
    saveAndDispatch({ type: 'ADD_ITEM', product, variant, quantity })
  }, [saveAndDispatch])

  const updateQuantity = useCallback((id, variant, quantity) => {
    saveAndDispatch({ type: 'UPDATE_QUANTITY', id, variant, quantity })
  }, [saveAndDispatch])

  const removeItem = useCallback((id, variant) => {
    saveAndDispatch({ type: 'REMOVE_ITEM', id, variant })
  }, [saveAndDispatch])

  const clearCart = useCallback(() => {
    saveAndDispatch({ type: 'CLEAR' })
  }, [saveAndDispatch])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      totalItems,
      totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}