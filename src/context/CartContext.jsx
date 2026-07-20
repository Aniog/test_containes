import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react'

const CartContext = createContext(null)
const CART_STORAGE_KEY = 'velmora-cart'

const loadCartItems = () => {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    return storedCart ? JSON.parse(storedCart) : []
  } catch {
    return []
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find((item) => item.cartId === action.payload.cartId)

      if (!existingItem) {
        return [action.payload, ...state]
      }

      return state.map((item) =>
        item.cartId === action.payload.cartId
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item,
      )
    }
    case 'UPDATE_QUANTITY':
      return state
        .map((item) =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item,
        )
        .filter((item) => item.quantity > 0)
    case 'REMOVE_ITEM':
      return state.filter((item) => item.cartId !== action.payload.cartId)
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(cartReducer, [], loadCartItems)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  )

  const addItem = (product, variant = 'Gold Tone', quantity = 1) => {
    const cartId = `${product.slug}-${variant.toLowerCase().replace(/\s+/g, '-')}`

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        cartId,
        slug: product.slug,
        name: product.name,
        shortName: product.shortName,
        price: product.price,
        variant,
        quantity,
        category: product.category,
      },
    })

    setIsCartOpen(true)
  }

  const updateQuantity = (cartId, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { cartId, quantity },
    })
  }

  const removeItem = (cartId) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { cartId },
    })
  }

  const value = {
    items,
    isCartOpen,
    cartCount,
    subtotal,
    addItem,
    openCart: () => setIsCartOpen(true),
    closeCart: () => setIsCartOpen(false),
    updateQuantity,
    removeItem,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
