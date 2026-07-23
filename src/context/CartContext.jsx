import { createContext, useContext, useReducer, useEffect } from 'react'

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

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existing) {
        return state.map((item) =>
          item.id === existing.id && item.variant === existing.variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: 1 }]
    }
    case 'REMOVE_ITEM':
      return state.filter(
        (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
      )
    case 'UPDATE_QUANTITY': {
      const { id, variant, quantity } = action.payload
      if (quantity <= 0) {
        return state.filter((item) => !(item.id === id && item.variant === variant))
      }
      return state.map((item) =>
        item.id === id && item.variant === variant ? { ...item, quantity } : item
      )
    }
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = 'gold') => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        variant,
      },
    })
  }

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
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