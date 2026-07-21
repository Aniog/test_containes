import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react"
import { getProductById } from "@/data/products"

const STORAGE_KEY = "velmora.cart.v1"
const CartContext = createContext(null)

const initialState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { productId, variant, quantity = 1 } = action
      const idx = state.items.findIndex(
        (i) => i.productId === productId && i.variant === variant
      )
      if (idx >= 0) {
        const items = [...state.items]
        items[idx] = { ...items[idx], quantity: items[idx].quantity + quantity }
        return { ...state, items }
      }
      return {
        ...state,
        items: [...state.items, { productId, variant, quantity }],
      }
    }
    case "REMOVE": {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.productId === action.productId && i.variant === action.variant)
        ),
      }
    }
    case "SET_QUANTITY": {
      const { productId, variant, quantity } = action
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.productId === productId && i.variant === variant)
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.productId === productId && i.variant === variant
            ? { ...i, quantity }
            : i
        ),
      }
    }
    case "CLEAR":
      return { ...state, items: [] }
    case "HYDRATE":
      return action.state
    default:
      return state
  }
}

function readStorage() {
  if (typeof window === "undefined") return initialState
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState
    const parsed = JSON.parse(raw)
    if (parsed && Array.isArray(parsed.items)) return parsed
  } catch {
    /* ignore corrupt storage */
  }
  return initialState
}

function writeStorage(state) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* ignore quota */
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    dispatch({ type: "HYDRATE", state: readStorage() })
    setHydrated(true)
  }, [])

  // Persist on change (only after hydration to avoid wiping storage)
  useEffect(() => {
    if (hydrated) writeStorage(state)
  }, [state, hydrated])

  const addItem = useCallback((productId, variant = "gold", quantity = 1) => {
    dispatch({ type: "ADD", productId, variant, quantity })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant) => {
    dispatch({ type: "REMOVE", productId, variant })
  }, [])

  const setQuantity = useCallback((productId, variant, quantity) => {
    dispatch({ type: "SET_QUANTITY", productId, variant, quantity })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const enrichedItems = useMemo(() => {
    return state.items
      .map((item) => {
        const product = getProductById(item.productId)
        if (!product) return null
        return { ...item, product, lineTotal: product.price * item.quantity }
      })
      .filter(Boolean)
  }, [state.items])

  const summary = useMemo(() => {
    const itemCount = enrichedItems.reduce((acc, i) => acc + i.quantity, 0)
    const subtotal = enrichedItems.reduce((acc, i) => acc + i.lineTotal, 0)
    const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 6
    const total = subtotal + shipping
    return { itemCount, subtotal, shipping, total }
  }, [enrichedItems])

  const value = {
    items: enrichedItems,
    rawItems: state.items,
    summary,
    hydrated,
    isOpen,
    openCart,
    closeCart,
    addItem,
    removeItem,
    setQuantity,
    clear,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return ctx
}
