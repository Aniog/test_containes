import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.material === action.payload.material
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id && item.material === action.payload.material
              ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
              : item
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.material === action.payload.material)
        ),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.material === action.payload.material
            ? { ...item, quantity: Math.max(1, action.payload.quantity) }
            : item
        ),
      }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
    case 'SET_CART_OPEN':
      return { ...state, isOpen: action.payload }
    default:
      return state
  }
}

const initialState = {
  items: [],
  isOpen: false,
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('velmora-cart')
        if (saved) {
          const parsed = JSON.parse(saved)
          return { ...initialState, ...parsed }
        }
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e)
      }
    }
    return initialState
  })

  useEffect(() => {
    try {
      localStorage.setItem('velmora-cart', JSON.stringify({ items: state.items }))
    } catch (e) {
      console.error('Failed to save cart to localStorage', e)
    }
  }, [state.items])

  const addItem = (product, material = 'gold', quantity = 1) =>
    dispatch({ type: 'ADD_ITEM', payload: { ...product, material, quantity } })
  const removeItem = (id, material) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { id, material } })
  const updateQuantity = (id, material, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, material, quantity } })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' })
  const setCartOpen = (isOpen) => dispatch({ type: 'SET_CART_OPEN', payload: isOpen })

  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        setCartOpen,
        cartCount,
        cartTotal,
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
