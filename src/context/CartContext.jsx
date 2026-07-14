import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.variant === action.payload.variant
      )
      
      if (existingIndex >= 0) {
        const newItems = [...state.items]
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + (action.payload.quantity || 1)
        }
        return { ...state, items: newItems }
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }]
      }
    }
    
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          item => !(item.id === action.payload.id && item.variant === action.payload.variant)
        )
      }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item => {
        if (item.id === action.payload.id && item.variant === action.payload.variant) {
          return { ...item, quantity: Math.max(1, action.payload.quantity) }
        }
        return item
      })
      return { ...state, items: newItems }
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

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false
  })

  // Persist cart to localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        parsed.items.forEach(item => {
          dispatch({ type: 'ADD_ITEM', payload: item })
        })
      } catch (e) {
        console.error('Failed to parse cart:', e)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(state))
  }, [state.items])

  const addItem = (product, variant = 'gold', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
        variant,
        quantity
      }
    })
  }

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' })
  }

  const setCartOpen = (isOpen) => {
    dispatch({ type: 'SET_CART_OPEN', payload: isOpen })
  }

  const cartTotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const cartCount = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

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
        cartTotal,
        cartCount
      }}
    >
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
