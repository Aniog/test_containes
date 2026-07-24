import { createContext, useContext, useMemo, useReducer, useState, useCallback } from 'react'

const CartContext = createContext(null)

const lineKey = (item) => `${item.id}::${item.variant || 'Gold'}`

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const key = lineKey(action.item)
      const existing = state.find((l) => lineKey(l) === key)
      if (existing) {
        return state.map((l) =>
          lineKey(l) === key ? { ...l, qty: l.qty + action.item.qty } : l,
        )
      }
      return [...state, { ...action.item }]
    }
    case 'REMOVE':
      return state.filter((l) => lineKey(l) !== action.key)
    case 'SET_QTY': {
      if (action.qty <= 0) return state.filter((l) => lineKey(l) !== action.key)
      return state.map((l) => (lineKey(l) === action.key ? { ...l, qty: action.qty } : l))
    }
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(cartReducer, [])
  const [isCartOpen, setCartOpen] = useState(false)
  const [isSearchOpen, setSearchOpen] = useState(false)

  const addItem = useCallback((product, { variant = 'Gold', qty = 1 } = {}) => {
    dispatch({
      type: 'ADD',
      item: {
        id: product.id,
        name: product.name,
        price: product.price,
        imgId: product.imgId,
        titleId: product.titleId,
        descId: product.descId,
        variant,
        qty,
      },
    })
    setCartOpen(true)
  }, [])

  const removeItem = useCallback((key) => dispatch({ type: 'REMOVE', key }), [])
  const setQty = useCallback((key, qty) => dispatch({ type: 'SET_QTY', key, qty }), [])
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const value = useMemo(() => {
    const count = lines.reduce((sum, l) => sum + l.qty, 0)
    const subtotal = lines.reduce((sum, l) => sum + l.qty * l.price, 0)
    return {
      lines,
      count,
      subtotal,
      addItem,
      removeItem,
      setQty,
      clearCart,
      isCartOpen,
      setCartOpen,
      isSearchOpen,
      setSearchOpen,
      lineKey,
    }
  }, [lines, addItem, removeItem, setQty, clearCart, isCartOpen, isSearchOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
