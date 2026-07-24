import React, { createContext, useContext, useReducer, useEffect } from "react"

const CartContext = createContext(null)

const CART_STORAGE_KEY = "velmora_cart_v1"

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload
    case "ADD_ITEM": {
      const { product, quantity, variant } = action.payload
      const existing = state.items.find(
        (item) => item.product.id === product.id && item.variant === variant
      )
      let items
      if (existing) {
        items = state.items.map((item) =>
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        items = [...state.items, { product, quantity, variant }]
      }
      return { ...state, items, isOpen: true }
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter(
        (item) =>
          !(item.product.id === action.payload.id && item.variant === action.payload.variant)
      )
      return { ...state, items }
    }
    case "UPDATE_QUANTITY": {
      const items = state.items.map((item) =>
        item.product.id === action.payload.id && item.variant === action.payload.variant
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
      return { ...state, items }
    }
    case "OPEN_CART":
      return { ...state, isOpen: true }
    case "CLOSE_CART":
      return { ...state, isOpen: false }
    case "CLEAR_CART":
      return { ...state, items: [] }
    default:
      return state
  }
}

function calculateTotals(items) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  return { subtotal, count }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        dispatch({ type: "HYDRATE", payload: { items: parsed.items || [], isOpen: false } })
      }
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: state.items }))
    } catch {
      // ignore
    }
  }, [state.items])

  const addItem = (product, quantity = 1, variant = "gold") => {
    dispatch({ type: "ADD_ITEM", payload: { product, quantity, variant } })
  }

  const removeItem = (id, variant) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id, variant } })
  }

  const updateQuantity = (id, variant, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, variant, quantity } })
  }

  const openCart = () => dispatch({ type: "OPEN_CART" })
  const closeCart = () => dispatch({ type: "CLOSE_CART" })
  const clearCart = () => dispatch({ type: "CLEAR_CART" })

  const totals = calculateTotals(state.items)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        ...totals,
        addItem,
        removeItem,
        updateQuantity,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}
