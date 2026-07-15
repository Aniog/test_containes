import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload
      const existingIndex = state.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      )
      if (existingIndex >= 0) {
        const updated = [...state]
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        }
        return updated
      }
      return [
        ...state,
        {
          productId: product.id,
          name: product.name,
          shortName: product.shortName,
          price: product.variants.find((v) => v.id === variant)?.price || product.price,
          variant,
          quantity,
          imageId: product.images[0]?.id,
        },
      ]
    }
    case 'REMOVE_ITEM': {
      return state.filter((_, i) => i !== action.payload.index)
    }
    case 'UPDATE_QUANTITY': {
      const { index, quantity } = action.payload
      if (quantity <= 0) {
        return state.filter((_, i) => i !== index)
      }
      const updated = [...state]
      updated[index] = { ...updated[index], quantity }
      return updated
    }
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addItem = useCallback((product, variant, quantity) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } })
  }, [])

  const removeItem = useCallback((index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { index } })
  }, [])

  const updateQuantity = useCallback((index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [])

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
