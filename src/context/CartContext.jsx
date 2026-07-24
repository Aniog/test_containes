import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react'

const CartContext = createContext(null)

const CART_STORAGE_KEY = 'velmora-cart'

function loadInitialState() {
  if (typeof window === 'undefined') return { items: [] }
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return { items: [] }
    const parsed = JSON.parse(raw)
    return { items: Array.isArray(parsed?.items) ? parsed.items : [] }
  } catch {
    return { items: [] }
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.productId === action.payload.productId && i.variant === action.payload.variant
      )
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.productId === action.payload.productId && i.variant === action.payload.variant
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        }
      }
      return { items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(
          (i) => !(i.productId === action.payload.productId && i.variant === action.payload.variant)
        ),
      }
    case 'UPDATE_QUANTITY':
      return {
        items: state.items.map((i) =>
          i.productId === action.payload.productId && i.variant === action.payload.variant
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        ),
      }
    case 'CLEAR_CART':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, null, loadInitialState)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const value = useMemo(() => {
    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )

    return {
      items: state.items,
      totalItems,
      subtotal,
      addItem: (product, variant = 'gold', quantity = 1) =>
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            productId: product.id,
            name: product.name,
            slug: product.slug,
            price: product.price,
            variant,
            quantity,
            imageQuery: product.imageQuery,
            imageUrl: product.imageUrl,
          },
        }),
      removeItem: (productId, variant) =>
        dispatch({ type: 'REMOVE_ITEM', payload: { productId, variant } }),
      updateQuantity: (productId, variant, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, variant, quantity } }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
