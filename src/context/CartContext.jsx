import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

const STORAGE_KEY = "velmora-cart-v1"

const CartStateContext = createContext(null)
const CartDispatchContext = createContext(null)
const CartUiContext = createContext(null)

function lineKey(productId, variantId) {
  return `${productId}__${variantId || "default"}`
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const key = lineKey(action.product.id, action.variantId)
      const existing = state.lines[key]
      const quantity = action.quantity || 1
      if (existing) {
        return {
          ...state,
          lines: {
            ...state.lines,
            [key]: { ...existing, quantity: existing.quantity + quantity },
          },
        }
      }
      return {
        ...state,
        lines: {
          ...state.lines,
          [key]: {
            key,
            product: action.product,
            variantId: action.variantId,
            quantity,
          },
        },
      }
    }
    case "REMOVE": {
      const lines = { ...state.lines }
      delete lines[action.key]
      return { ...state, lines }
    }
    case "UPDATE_QTY": {
      const existing = state.lines[action.key]
      if (!existing) return state
      if (action.quantity <= 0) {
        const lines = { ...state.lines }
        delete lines[action.key]
        return { ...state, lines }
      }
      return {
        ...state,
        lines: {
          ...state.lines,
          [action.key]: { ...existing, quantity: action.quantity },
        },
      }
    }
    case "CLEAR":
      return { ...state, lines: {} }
    case "HYDRATE":
      return action.state || { lines: {} }
    default:
      return state
  }
}

const initialState = { lines: {} }

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed && typeof parsed === "object" && parsed.lines) {
          dispatch({ type: "HYDRATE", state: parsed })
        }
      }
    } catch (e) {
      console.warn("Failed to load cart from storage", e)
    } finally {
      setHydrated(true)
    }
  }, [])

  // Persist to localStorage on change
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      console.warn("Failed to persist cart", e)
    }
  }, [state, hydrated])

  const derived = useMemo(() => {
    const lines = Object.values(state.lines)
    const count = lines.reduce((sum, l) => sum + l.quantity, 0)
    const subtotal = lines.reduce(
      (sum, l) => sum + l.quantity * l.product.price,
      0
    )
    return { count, subtotal, lines }
  }, [state])

  const addItem = (product, variantId, quantity = 1) => {
    dispatch({ type: "ADD", product, variantId, quantity })
  }
  const removeItem = (key) => dispatch({ type: "REMOVE", key })
  const updateQuantity = (key, quantity) =>
    dispatch({ type: "UPDATE_QTY", key, quantity })
  const clear = () => dispatch({ type: "CLEAR" })
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <CartStateContext.Provider value={{ ...derived, hydrated }}>
      <CartDispatchContext.Provider
        value={{ addItem, removeItem, updateQuantity, clear }}
      >
        <CartUiContext.Provider value={{ isOpen, openCart, closeCart }}>
          {children}
        </CartUiContext.Provider>
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartStateContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

export function useCartActions() {
  const ctx = useContext(CartDispatchContext)
  if (!ctx) throw new Error("useCartActions must be used within CartProvider")
  return ctx
}

export function useCartUi() {
  const ctx = useContext(CartUiContext)
  if (!ctx) throw new Error("useCartUi must be used within CartProvider")
  return ctx
}
