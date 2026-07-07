import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext()

const loadCart = () => {
  try {
    const saved = localStorage.getItem('velmora-cart')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find((item) => item.id === action.payload.id)
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.payload.id)
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(0, action.payload.quantity) }
          : item
      ).filter((item) => item.quantity > 0)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart)

  const syncCart = useCallback((newCart) => {
    localStorage.setItem('velmora-cart', JSON.stringify(newCart))
  }, [])

  const wrappedDispatch = useCallback((action) => {
    dispatch(action)
  }, [])

  React.useEffect(() => {
    syncCart(cart)
  }, [cart, syncCart])

  const addItem = useCallback((product) => {
    wrappedDispatch({ type: 'ADD_ITEM', payload: product })
  }, [wrappedDispatch])

  const removeItem = useCallback((id) => {
    wrappedDispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }, [wrappedDispatch])

  const updateQuantity = useCallback((id, quantity) => {
    wrappedDispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }, [wrappedDispatch])

  const clearCart = useCallback(() => {
    wrappedDispatch({ type: 'CLEAR_CART' })
  }, [wrappedDispatch])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
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