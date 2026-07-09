import React, { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext()

const storageKey = 'velmora-cart'

function loadCart() {
  try {
    const data = localStorage.getItem(storageKey)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveCart(items) {
  localStorage.setItem(storageKey, JSON.stringify(items))
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.material === action.payload.material
      )
      if (existing) {
        return state.map((item) =>
          item.id === existing.id && item.material === existing.material
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.cartId !== action.payload)
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.cartId === action.payload.cartId
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  React.useEffect(() => {
    saveCart(items)
  }, [items])

  const addItem = useCallback((product, material = 'gold') => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        material,
        cartId: `${product.id}-${material}-${Date.now()}`,
      },
    })
  }, [])

  const removeItem = useCallback((cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId })
  }, [])

  const updateQuantity = useCallback((cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

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
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
