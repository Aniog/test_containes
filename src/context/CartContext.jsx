import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = {
  items: [],
  isOpen: false,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const product = action.product
      const existing = state.items.find((item) => item.id === product.id)

      if (existing) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + (action.quantity || 1) }
              : item,
          ),
        }
      }

      return {
        ...state,
        isOpen: true,
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            imgId: product.imgId,
            titleId: product.titleId,
            descId: product.descId,
            description: product.description,
            variant: product.variant || 'Gold Tone',
            quantity: action.quantity || 1,
          },
        ],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.id
              ? { ...item, quantity: Math.max(1, action.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }
    case 'OPEN_CART':
      return { ...state, isOpen: true }
    case 'CLOSE_CART':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      items: state.items,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addItem: (product, quantity = 1) =>
        dispatch({ type: 'ADD_ITEM', product, quantity }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', id }),
      updateQuantity: (id, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', id, quantity }),
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
