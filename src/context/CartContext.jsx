import { createContext, useContext, useReducer, useEffect, useState, useCallback } from 'react'

const CartContext = createContext(null)

const STORAGE_KEY = 'velmora-cart'

const initialState = { items: [] }

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, tone, quantity } = action
      const key = `${product.id}__${tone}`
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            tone,
            quantity,
            imgId: product.imgId,
            titleId: product.titleId,
            descId: product.descId,
            shortDesc: product.shortDesc,
          },
        ],
      }
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.key !== action.key) }
    case 'SET_QTY': {
      const qty = action.quantity
      if (qty <= 0) {
        return { items: state.items.filter((i) => i.key !== action.key) }
      }
      return {
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, quantity: qty } : i
        ),
      }
    }
    case 'CLEAR':
      return { items: [] }
    case 'HYDRATE':
      return action.state || initialState
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) dispatch({ type: 'HYDRATE', state: JSON.parse(raw) })
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* ignore */
    }
  }, [state])

  const addItem = useCallback((product, tone = 'Gold', quantity = 1) => {
    dispatch({ type: 'ADD', product, tone, quantity })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: 'REMOVE', key })
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: 'SET_QTY', key, quantity })
  }, [])

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const count = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = state.items.reduce((sum, i) => sum + i.quantity * i.price, 0)

  const value = {
    items: state.items,
    count,
    subtotal,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    setQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
