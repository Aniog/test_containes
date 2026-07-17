import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const CART_STORAGE_KEY = 'velmora_cart'

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) return parsed
    }
  } catch {}
  return []
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existingIndex >= 0) {
        const updated = [...state]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + action.payload.quantity,
        }
        return updated
      }
      return [...state, { ...action.payload }]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.cartId !== action.payload)
    case 'UPDATE_QUANTITY': {
      const { cartId, quantity } = action.payload
      if (quantity <= 0) {
        return state.filter((item) => item.cartId !== cartId)
      }
      return state.map((item) =>
        item.cartId === cartId ? { ...item, quantity } : item
      )
    }
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

let cartIdCounter = 0

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCartFromStorage)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addItem = (product, variant = 'gold', quantity = 1) => {
    cartIdCounter += 1
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        cartId: `cart_${cartIdCounter}_${Date.now()}`,
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
        quantity,
      },
    })
  }

  const removeItem = (cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId })
  }

  const updateQuantity = (cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
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