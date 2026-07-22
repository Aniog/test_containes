import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const STORAGE_KEY = 'velmora-cart'

function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity } = action.payload
      const existingIndex = state.findIndex(
        (item) => item.id === product.id && item.variant === variant
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
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          image: product.images[0],
        },
      ]
    }
    case 'REMOVE_ITEM':
      return state.filter((_, i) => i !== action.payload)
    case 'UPDATE_QUANTITY': {
      const { index, quantity } = action.payload
      if (quantity <= 0) return state.filter((_, i) => i !== index)
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
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addItem = (product, variant = 'gold', quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } })
  }

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index })
  }

  const updateQuantity = (index, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } })
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
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}