import { createContext, useContext, useEffect, useReducer, useState, useCallback } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

function readInitial() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity = 1 } = action
      const key = `${product.id}::${variant.id}`
      const existing = state.find((l) => l.key === key)
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + quantity } : l
        )
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          imageQuery: product.imageQuery,
          variant: { id: variant.id, label: variant.label, tone: variant.tone },
          quantity,
        },
      ]
    }
    case "REMOVE":
      return state.filter((l) => l.key !== action.key)
    case "SET_QTY":
      return state
        .map((l) => (l.key === action.key ? { ...l, quantity: Math.max(1, action.qty) } : l))
    case "CLEAR":
      return []
    case "HYDRATE":
      return action.state
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], readInitial)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [lastAdded, setLastAdded] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* noop */
    }
  }, [items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: "ADD", product, variant, quantity })
    setLastAdded({ product, variant, at: Date.now() })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", key })
  }, [])

  const setQuantity = useCallback((key, qty) => {
    dispatch({ type: "SET_QTY", key, qty })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const openDrawer = useCallback(() => setIsDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])

  const itemCount = items.reduce((sum, l) => sum + l.quantity, 0)
  const subtotal = items.reduce((sum, l) => sum + l.price * l.quantity, 0)

  const value = {
    items,
    addItem,
    removeItem,
    setQuantity,
    clear,
    itemCount,
    subtotal,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    lastAdded,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
