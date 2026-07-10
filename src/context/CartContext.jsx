import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react"
import { findProductById } from "../data/products.js"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora_cart_v1"

const initial = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload || initial
    case "add": {
      const { id, variant = "gold", quantity = 1 } = action
      const product = findProductById(id)
      if (!product) return state
      const existing = state.items.find(
        (item) => item.id === id && item.variant === variant,
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === id && item.variant === variant
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        }
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id,
            variant,
            quantity,
            name: product.name,
            price: product.price,
            image: product.images.primary,
            tone: product.tone,
          },
        ],
      }
    }
    case "remove": {
      const { id, variant } = action
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === id && item.variant === variant),
        ),
      }
    }
    case "setQuantity": {
      const { id, variant, quantity } = action
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.id === id && item.variant === variant),
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity }
            : item,
        ),
      }
    }
    case "clear":
      return initial
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial)
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        dispatch({ type: "hydrate", payload: parsed })
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore
    }
  }, [state, hydrated])

  const addToCart = useCallback((id, options = {}) => {
    dispatch({
      type: "add",
      id,
      variant: options.variant || "gold",
      quantity: options.quantity || 1,
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((id, variant) => {
    dispatch({ type: "remove", id, variant })
  }, [])

  const setQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: "setQuantity", id, variant, quantity })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: "clear" })
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    return {
      ...state,
      itemCount,
      subtotal,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      isOpen,
      openCart,
      closeCart,
    }
  }, [state, addToCart, removeFromCart, setQuantity, clearCart, isOpen, openCart, closeCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
