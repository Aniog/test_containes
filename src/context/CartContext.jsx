import { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext(null)
const CartDispatch = createContext(null)

function loadCart() {
  try {
    const raw = localStorage.getItem('velmora-cart')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(items) {
  try {
    localStorage.setItem('velmora-cart', JSON.stringify(items))
  } catch {}
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { product, color } = action
      const key = `${product.id}-${color}`
      const existing = state.find((item) => item.key === key)
      if (existing) {
        return state.map((item) =>
          item.key === key ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [
        ...state,
        { key, productId: product.id, name: product.name, price: product.price, color, qty: 1, image: product.images[0] },
      ]
    }
    case 'REMOVE':
      return state.filter((item) => item.key !== action.key)
    case 'SET_QTY':
      return state.map((item) =>
        item.key === action.key ? { ...item, qty: Math.max(1, action.qty) } : item,
      )
    case 'CLEAR':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    saveCart(cart)
  }, [cart])

  const count = cart.reduce((sum, item) => sum + item.qty, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  return (
    <CartContext.Provider value={{ cart, count, total }}>
      <CartDispatch.Provider value={dispatch}>{children}</CartDispatch.Provider>
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}

export function useCartDispatch() {
  const ctx = useContext(CartDispatch)
  if (!ctx) throw new Error('useCartDispatch must be inside CartProvider')
  return ctx
}
