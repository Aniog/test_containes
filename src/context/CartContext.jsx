import React, { createContext, useContext, useReducer, useEffect, useMemo } from 'react'

const CART_STORAGE_KEY = 'velmora_cart'

const CartContext = createContext(null)

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id && item.variant === action.payload.variant
      )
      if (existingIndex >= 0) {
        const next = [...state.items]
        next[existingIndex].quantity += action.payload.quantity
        return { ...state, items: next }
      }
      return { ...state, items: [...state.items, action.payload] }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.payload.id && item.variant === action.payload.variant)
        ),
      }
    case 'UPDATE_QUANTITY': {
      const next = state.items.map((item) =>
        item.id === action.payload.id && item.variant === action.payload.variant
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return { ...state, items: next }
    }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    case 'HYDRATE':
      return { ...state, items: action.payload.items }
    default:
      return state
  }
}

function getInitialCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed && Array.isArray(parsed.items)) {
        return { items: parsed.items }
      }
    }
  } catch {
    // ignore
  }
  return { items: [] }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  useEffect(() => {
    const saved = getInitialCart()
    if (saved.items.length > 0) {
      dispatch({ type: 'HYDRATE', payload: saved })
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: state.items }))
    } catch {
      // ignore
    }
  }, [state.items])

  const addItem = (product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        imageQuery: product.cartImage,
        variant,
        quantity,
      },
    })
  }

  const removeItem = (id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } })
  }

  const updateQuantity = (id, variant, quantity) => {
    if (quantity < 1) {
      removeItem(id, variant)
      return
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const totals = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return { itemCount, subtotal }
  }, [state.items])

  const value = {
    items: state.items,
    itemCount: totals.itemCount,
    subtotal: totals.subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
