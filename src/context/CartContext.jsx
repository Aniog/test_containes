import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(item => item.id === action.payload.id && item.variant === action.payload.variant)
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.variant === action.payload.variant
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.payload }] }
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => !(item.id === action.payload.id && item.variant === action.payload.variant)) }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.variant === action.payload.variant
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'TOGGLE_DRAWER':
      return { ...state, isOpen: !state.isOpen }
    case 'CLOSE_DRAWER':
      return { ...state, isOpen: false }
    case 'OPEN_DRAWER':
      return { ...state, isOpen: true }
    case 'LOAD_CART':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  useEffect(() => {
    try {
      const saved = localStorage.getItem('velmora-cart')
      if (saved) {
        const parsed = JSON.parse(saved)
        dispatch({ type: 'LOAD_CART', payload: { items: parsed.items || [] } })
      }
    } catch (e) {
      console.error('Failed to load cart:', e)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify({ items: state.items }))
    } catch (e) {
      console.error('Failed to save cart:', e)
    }
  }, [state.items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      },
    })
    dispatch({ type: 'OPEN_DRAWER' })
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }, [])

  const toggleDrawer = useCallback(() => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  }, [])

  const closeDrawer = useCallback(() => {
    dispatch({ type: 'CLOSE_DRAWER' })
  }, [])

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, toggleDrawer, closeDrawer, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
