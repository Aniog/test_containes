import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react'

const CART_KEY = 'velmora-cart'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'LOAD':
      return action.payload
    case 'ADD': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      }
      return [...state, action.payload]
    }
    case 'REMOVE':
      return state.filter(
        (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
      )
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id && item.variant === action.payload.variant
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [])
  const [isCartOpen, setIsCartOpen] = React.useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY)
      if (saved) {
        dispatch({ type: 'LOAD', payload: JSON.parse(saved) })
      }
    } catch (err) {
      console.error('Failed to load cart', err)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items))
    } catch (err) {
      console.error('Failed to save cart', err)
    }
  }, [items])

  const addItem = useCallback((product, variant = 'gold', quantity = 1) => {
    dispatch({
      type: 'ADD',
      payload: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      },
    })
    setIsCartOpen(true)
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE', payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
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
