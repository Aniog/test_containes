import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { findProductById } from "@/data/products"

const STORAGE_KEY = "velmora.cart.v1"

const CartContext = createContext(null)

function readStorage() {
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

function writeStorage(items) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // ignore quota / privacy errors
  }
}

function makeLineId(productId, variant) {
  return `${productId}::${variant || "default"}`
}

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const { productId, variant, quantity } = action
      const lineId = makeLineId(productId, variant)
      const existing = state.find((l) => l.id === lineId)
      if (existing) {
        return state.map((l) =>
          l.id === lineId ? { ...l, quantity: Math.min(99, l.quantity + quantity) } : l
        )
      }
      return [...state, { id: lineId, productId, variant, quantity }]
    }
    case "setQuantity": {
      const { lineId, quantity } = action
      if (quantity <= 0) return state.filter((l) => l.id !== lineId)
      return state.map((l) => (l.id === lineId ? { ...l, quantity: Math.min(99, quantity) } : l))
    }
    case "remove":
      return state.filter((l) => l.id !== action.lineId)
    case "clear":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], readStorage)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    writeStorage(items)
  }, [items])

  const addToCart = useCallback((productId, variant = "gold", quantity = 1) => {
    dispatch({ type: "add", productId, variant, quantity })
    setIsOpen(true)
  }, [])

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "setQuantity", lineId, quantity })
  }, [])

  const removeLine = useCallback((lineId) => {
    dispatch({ type: "remove", lineId })
  }, [])

  const clear = useCallback(() => dispatch({ type: "clear" }), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => {
    const lines = items.map((line) => {
      const product = findProductById(line.productId)
      return {
        ...line,
        product,
        lineTotal: product ? product.price * line.quantity : 0,
      }
    })
    const itemCount = lines.reduce((acc, l) => acc + l.quantity, 0)
    const subtotal = lines.reduce((acc, l) => acc + l.lineTotal, 0)
    return {
      items,
      lines,
      itemCount,
      subtotal,
      isOpen,
      addToCart,
      setQuantity,
      removeLine,
      clear,
      openCart,
      closeCart,
    }
  }, [items, isOpen, addToCart, setQuantity, removeLine, clear, openCart, closeCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
