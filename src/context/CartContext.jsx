import { createContext, useContext, useReducer, useCallback } from 'react'

const CartContext = createContext(null)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, variant, quantity = 1 } = action.payload
      const key = `${product.id}-${variant.id}`
      const existing = state.items[key]

      if (existing) {
        return {
          ...state,
          items: {
            ...state.items,
            [key]: { ...existing, quantity: existing.quantity + quantity },
          },
        }
      }

      return {
        ...state,
        items: {
          ...state.items,
          [key]: {
            productId: product.id,
            name: product.name,
            price: product.price,
            variantId: variant.id,
            variantLabel: variant.label,
            quantity,
            imageId: product.images[0]?.id,
          },
        },
      }
    }

    case 'REMOVE_ITEM': {
      const { [action.payload]: removed, ...rest } = state.items
      return { ...state, items: rest }
    }

    case 'UPDATE_QUANTITY': {
      const { key, quantity } = action.payload
      if (quantity <= 0) {
        const { [key]: removed, ...rest } = state.items
        return { ...state, items: rest }
      }
      return {
        ...state,
        items: {
          ...state.items,
          [key]: { ...state.items[key], quantity },
        },
      }
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }

    case 'OPEN_CART':
      return { ...state, isOpen: true }

    case 'CLOSE_CART':
      return { ...state, isOpen: false }

    default:
      return state
  }
}

const initialState = {
  items: {},
  isOpen: false,
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, variant, quantity } })
    dispatch({ type: 'OPEN_CART' })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE_ITEM', payload: key })
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { key, quantity } })
  }, [])

  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' })
  }, [])

  const closeCart = useCallback(() => {
    dispatch({ type: 'CLOSE_CART' })
  }, [])

  const openCart = useCallback(() => {
    dispatch({ type: 'OPEN_CART' })
  }, [])

  const totalItems = Object.values(state.items).reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  const totalPrice = Object.values(state.items).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        closeCart,
        openCart,
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
