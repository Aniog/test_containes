import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { products } from '@/lib/store-data'

const CART_STORAGE_KEY = 'velmora-cart'
const CartContext = createContext(null)

function getInitialItems() {
  if (typeof window === 'undefined') {
    return []
  }

  const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
  return storedCart ? JSON.parse(storedCart) : []
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const matchIndex = state.items.findIndex(
        (item) => item.slug === action.payload.slug && item.tone === action.payload.tone,
      )

      if (matchIndex >= 0) {
        return {
          ...state,
          isCartOpen: true,
          items: state.items.map((item, index) =>
            index === matchIndex
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item,
          ),
        }
      }

      return {
        ...state,
        isCartOpen: true,
        items: [...state.items, action.payload],
      }
    }

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(1, action.payload.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }

    case 'OPEN_CART':
      return { ...state, isCartOpen: true }

    case 'CLOSE_CART':
      return { ...state, isCartOpen: false }

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: getInitialItems(),
    isCartOpen: false,
  })

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
  }, [state.items])

  const productIndex = useMemo(
    () => Object.fromEntries(products.map((product) => [product.slug, product])),
    [],
  )

  const cartCount = useMemo(
    () => state.items.reduce((total, item) => total + item.quantity, 0),
    [state.items],
  )

  const subtotal = useMemo(
    () =>
      state.items.reduce((total, item) => {
        const product = productIndex[item.slug]
        return total + (product?.price ?? 0) * item.quantity
      }, 0),
    [productIndex, state.items],
  )

  const value = useMemo(
    () => ({
      items: state.items,
      isCartOpen: state.isCartOpen,
      cartCount,
      subtotal,
      openCart: () => dispatch({ type: 'OPEN_CART' }),
      closeCart: () => dispatch({ type: 'CLOSE_CART' }),
      removeItem: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
      updateQuantity: (id, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
      addItem: (product, tone, quantity = 1) =>
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            id: `${product.slug}-${tone}`,
            slug: product.slug,
            tone,
            quantity,
          },
        }),
    }),
    [cartCount, state.isCartOpen, state.items, subtotal],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
