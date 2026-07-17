import { createContext, useContext, useMemo, useReducer, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)

const getProduct = (productId) => products.find((product) => product.id === productId)

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      const product = getProduct(action.productId)
      if (!product) return state

      const existing = state.items.find(
        (item) => item.productId === action.productId && item.tone === action.tone,
      )

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.productId && item.tone === action.tone
              ? { ...item, quantity: item.quantity + action.quantity }
              : item,
          ),
        }
      }

      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: action.productId,
            tone: action.tone || product.toneOptions[0],
            quantity: action.quantity || 1,
          },
        ],
      }
    }
    case 'remove':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.productId === action.productId && item.tone === action.tone),
        ),
      }
    case 'quantity':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.productId === action.productId && item.tone === action.tone
              ? { ...item, quantity: Math.max(1, action.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }
    case 'clear':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const [isCartOpen, setCartOpen] = useState(false)

  const cartItems = useMemo(
    () =>
      state.items
        .map((item) => ({ ...item, product: getProduct(item.productId) }))
        .filter((item) => item.product),
    [state.items],
  )

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  const addToCart = (product, options = {}) => {
    dispatch({
      type: 'add',
      productId: product.id,
      tone: options.tone || product.toneOptions[0],
      quantity: options.quantity || 1,
    })
    setCartOpen(true)
  }

  const value = {
    cartItems,
    cartCount,
    subtotal,
    isCartOpen,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    addToCart,
    removeFromCart: (productId, tone) => dispatch({ type: 'remove', productId, tone }),
    updateQuantity: (productId, tone, quantity) =>
      dispatch({ type: 'quantity', productId, tone, quantity }),
    clearCart: () => dispatch({ type: 'clear' }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}
