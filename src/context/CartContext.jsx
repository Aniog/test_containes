import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)
const CartDispatchContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant = 'Gold', quantity = 1 } = action.payload
      const key = `${product.id}-${variant}`
      const existing = state.items.find((item) => item.key === key)
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.key === key
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        }
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0] || '',
            variant,
            quantity,
          },
        ],
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter((item) => item.key !== action.payload),
      }
    }
    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((item) => item.key !== key) }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.key === key ? { ...item, quantity } : item
        ),
      }
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] }
    }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider value={{ items: state.items, totalItems, totalPrice }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext)
  if (!context) throw new Error('useCartDispatch must be used within CartProvider')
  return context
}