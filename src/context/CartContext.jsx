import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const storageKey = 'velmora-cart'

const initialState = {
  isOpen: false,
  items: [],
}

function readStoredCart() {
  try {
    return window.localStorage.getItem(storageKey)
  } catch (error) {
    console.error('Unable to access cart storage', error)
    return null
  }
}

function writeStoredCart(items) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(items))
  } catch (error) {
    console.error('Unable to persist cart state', error)
  }
}

function getItemKey(productSlug, tone) {
  return `${productSlug}-${tone.toLowerCase().replace(/\s+/g, '-')}`
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      return {
        ...state,
        items: action.payload,
      }
    case 'open':
      return { ...state, isOpen: true }
    case 'close':
      return { ...state, isOpen: false }
    case 'toggle':
      return { ...state, isOpen: !state.isOpen }
    case 'add': {
      const { product, tone, quantity } = action.payload
      const itemKey = getItemKey(product.slug, tone)
      const existingItem = state.items.find((item) => item.itemKey === itemKey)

      if (existingItem) {
        return {
          ...state,
          isOpen: true,
          items: state.items.map((item) =>
            item.itemKey === itemKey
              ? { ...item, quantity: item.quantity + quantity }
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
            itemKey,
            quantity,
            tone,
            product,
          },
        ],
      }
    }
    case 'remove':
      return {
        ...state,
        items: state.items.filter((item) => item.itemKey !== action.payload),
      }
    case 'quantity':
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.itemKey === action.payload.itemKey
              ? { ...item, quantity: Math.max(1, action.payload.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const saved = readStoredCart()
    if (!saved) {
      return
    }

    try {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) {
        dispatch({ type: 'hydrate', payload: parsed })
      }
    } catch (error) {
      console.error('Unable to restore cart state', error)
    }
  }, [])

  useEffect(() => {
    writeStoredCart(state.items)
  }, [state.items])

  const value = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    )
    const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0)

    return {
      items: state.items,
      isOpen: state.isOpen,
      subtotal,
      cartCount,
      openCart: () => dispatch({ type: 'open' }),
      closeCart: () => dispatch({ type: 'close' }),
      toggleCart: () => dispatch({ type: 'toggle' }),
      addItem: (product, tone, quantity = 1) =>
        dispatch({
          type: 'add',
          payload: { product, tone, quantity },
        }),
      removeItem: (itemKey) => dispatch({ type: 'remove', payload: itemKey }),
      updateQuantity: (itemKey, quantity) =>
        dispatch({
          type: 'quantity',
          payload: { itemKey, quantity },
        }),
    }
  }, [state.isOpen, state.items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
