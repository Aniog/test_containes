import React, { createContext, useContext, useReducer, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity } = action.payload
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.variant.id === variant.id
      )
      if (existingIndex >= 0) {
        const next = [...state.items]
        next[existingIndex].quantity += quantity
        return { ...state, items: next }
      }
      return { ...state, items: [...state.items, { product, variant, quantity }] }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(item.product.id === action.payload.productId && item.variant.id === action.payload.variantId)
        ),
      }
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === action.payload.productId && item.variant.id === action.payload.variantId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variantId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, variantId } })
  }, [])

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: { productId, variantId } })
      return
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variantId, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

  const totals = useMemo(() => {
    const subtotal = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    const count = state.items.reduce((sum, item) => sum + item.quantity, 0)
    return { subtotal, count }
  }, [state.items])

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen,
      setIsOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      ...totals,
    }),
    [state.items, isOpen, addItem, removeItem, updateQuantity, clearCart, totals]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
