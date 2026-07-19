import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react"
import { getProductById } from "@/data/products"

const STORAGE_KEY = "velmora_cart_v1"

const CartContext = createContext(null)

const initialState = {
  items: [], // { id, name, price, tone, quantity, imageId, titleId }
  isOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return { ...state, items: action.items }
    case "add": {
      const { id, tone, quantity = 1 } = action
      const existing = state.items.find(
        (item) => item.id === id && item.tone === tone,
      )
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === id && item.tone === tone
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action }] }
    }
    case "updateQuantity": {
      const { id, tone, quantity } = action
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => !(item.id === id && item.tone === tone),
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id && item.tone === tone ? { ...item, quantity } : item,
        ),
      }
    }
    case "remove": {
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.id === action.id && item.tone === action.tone),
        ),
      }
    }
    case "clear":
      return { ...state, items: [] }
    case "open":
      return { ...state, isOpen: true }
    case "close":
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage once
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed?.items)) {
          dispatch({ type: "hydrate", items: parsed.items })
        }
      }
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true)
  }, [])

  // Persist on change
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ items: state.items }),
      )
    } catch {
      // ignore quota errors
    }
  }, [state.items, hydrated])

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (state.isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [state.isOpen])

  const addItem = useCallback((product, options = {}) => {
    const { tone = product.tones?.[0] || "gold", quantity = 1 } = options
    dispatch({
      type: "add",
      id: product.id,
      name: product.name,
      price: product.price,
      tone,
      quantity,
      eyebrow: product.eyebrow,
    })
    dispatch({ type: "open" })
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    dispatch({ type: "updateQuantity", id, tone, quantity })
  }, [])

  const removeItem = useCallback((id, tone) => {
    dispatch({ type: "remove", id, tone })
  }, [])

  const clear = useCallback(() => dispatch({ type: "clear" }), [])

  const openCart = useCallback(() => dispatch({ type: "open" }), [])
  const closeCart = useCallback(() => dispatch({ type: "close" }), [])

  const summary = useMemo(() => {
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    const shipping = subtotal > 75 || subtotal === 0 ? 0 : 8
    const total = subtotal + shipping
    return { itemCount, subtotal, shipping, total }
  }, [state.items])

  const value = {
    items: state.items,
    isOpen: state.isOpen,
    hydrated,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    openCart,
    closeCart,
    ...summary,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
