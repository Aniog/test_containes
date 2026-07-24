import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react'

const CartContext = createContext()

const CART_STORAGE_KEY = 'velmora-cart'

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload
      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      )

      if (existingIndex >= 0) {
        const updatedItems = [...state.items]
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + quantity,
        }
        return { ...state, items: updatedItems }
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            variant,
            quantity,
          },
        ],
      }
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      }
    }

    case 'UPDATE_QUANTITY': {
      const { index, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((_, i) => i !== index),
        }
      }
      const updatedItems = [...state.items]
      updatedItems[index] = { ...updatedItems[index], quantity }
      return { ...state, items: updatedItems }
    }

    case 'CLEAR_CART':
      return { ...state, items: [] }

    default:
      return state
  }
}

function getInitialCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return { items: parsed.items || [] }
    }
  } catch {
    // ignore
  }
  return { items: [] }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, getInitialCart)
  const [isCartOpen, setIsCartOpen] = React.useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: state.items }))
    } catch {
      // ignore
    }
  }, [state.items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } })
  }, [])

  const removeItem = useCallback((index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index })
  }, [])

  const updateQuantity = useCallback((index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const openCart = useCallback(() => setIsCartOpen(true), [])
  const closeCart = useCallback(() => setIsCartOpen(false), [])

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart,
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
