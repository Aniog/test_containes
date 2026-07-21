import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

function loadInitial() {
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

// A cart line is keyed by product id + variant so the same product in two
// tones stays as separate lines.
const lineKey = (item) => `${item.id}::${item.variant}`

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const incoming = action.item
      const key = lineKey(incoming)
      const existing = state.find((l) => l.key === key)
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + incoming.quantity } : l
        )
      }
      return [...state, { ...incoming, key }]
    }
    case "REMOVE":
      return state.filter((l) => l.key !== action.key)
    case "SET_QTY": {
      if (action.quantity <= 0) {
        return state.filter((l) => l.key !== action.key)
      }
      return state.map((l) =>
        l.key === action.key ? { ...l, quantity: action.quantity } : l
      )
    }
    case "CLEAR":
      return []
    case "HYDRATE":
      return action.lines
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, [])
  const [isOpen, setIsOpen] = useState(false)

  // Hydrate from localStorage on mount.
  useEffect(() => {
    dispatch({ type: "HYDRATE", lines: loadInitial() })
  }, [])

  // Persist on change.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* ignore */
    }
  }, [lines])

  // Lock body scroll when drawer open.
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  const count = useMemo(() => lines.reduce((n, l) => n + l.quantity, 0), [lines])
  const subtotal = useMemo(
    () => lines.reduce((n, l) => n + l.price * l.quantity, 0),
    [lines]
  )

  const addItem = (item) => {
    dispatch({ type: "ADD", item })
    setIsOpen(true)
  }
  const removeItem = (key) => dispatch({ type: "REMOVE", key })
  const setQuantity = (key, quantity) =>
    dispatch({ type: "SET_QTY", key, quantity })
  const clear = () => dispatch({ type: "CLEAR" })
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const value = {
    lines,
    count,
    subtotal,
    isOpen,
    addItem,
    removeItem,
    setQuantity,
    clear,
    openCart,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
