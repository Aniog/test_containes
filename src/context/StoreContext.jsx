import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const StoreContext = createContext(null)

const storageKey = 'velmora-cart'

const initialState = {
  cartItems: [],
  isCartOpen: false,
}

function storeReducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      return {
        ...state,
        cartItems: action.payload,
      }
    case 'open-cart':
      return {
        ...state,
        isCartOpen: true,
      }
    case 'close-cart':
      return {
        ...state,
        isCartOpen: false,
      }
    case 'toggle-cart':
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      }
    case 'add-item': {
      const incoming = action.payload
      const existing = state.cartItems.find((item) => item.key === incoming.key)

      if (existing) {
        return {
          ...state,
          isCartOpen: true,
          cartItems: state.cartItems.map((item) =>
            item.key === incoming.key
              ? { ...item, quantity: item.quantity + incoming.quantity }
              : item,
          ),
        }
      }

      return {
        ...state,
        isCartOpen: true,
        cartItems: [...state.cartItems, incoming],
      }
    }
    case 'update-quantity':
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.key === action.payload.key
              ? { ...item, quantity: Math.max(1, action.payload.quantity) }
              : item,
          )
          .filter((item) => item.quantity > 0),
      }
    case 'remove-item':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.key !== action.payload),
      }
    default:
      return state
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, initialState)

  useEffect(() => {
    const storedCart = window.localStorage.getItem(storageKey)
    if (storedCart) {
      dispatch({ type: 'hydrate', payload: JSON.parse(storedCart) })
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state.cartItems))
  }, [state.cartItems])

  const value = useMemo(() => {
    const addToCart = (product, options = {}) => {
      const variant = options.variant || product.variants[0]
      const quantity = options.quantity || 1
      dispatch({
        type: 'add-item',
        payload: {
          key: `${product.slug}-${variant.toLowerCase().replace(/\s+/g, '-')}`,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          category: product.category,
          type: product.type,
        },
      })
    }

    const updateQuantity = (key, quantity) => {
      if (quantity <= 0) {
        dispatch({ type: 'remove-item', payload: key })
        return
      }

      dispatch({ type: 'update-quantity', payload: { key, quantity } })
    }

    const removeFromCart = (key) => {
      dispatch({ type: 'remove-item', payload: key })
    }

    const toggleCart = () => dispatch({ type: 'toggle-cart' })
    const openCart = () => dispatch({ type: 'open-cart' })
    const closeCart = () => dispatch({ type: 'close-cart' })

    const cartCount = state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = state.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    return {
      cartItems: state.cartItems,
      isCartOpen: state.isCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      toggleCart,
      openCart,
      closeCart,
      cartCount,
      subtotal,
    }
  }, [state.cartItems, state.isCartOpen])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)

  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }

  return context
}
