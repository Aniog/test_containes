import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart"

function loadInitial() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity } = action
      const key = `${product.id}__${variant}`
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          imageId: product.images[0]?.id,
          imageAlt: product.images[0]?.alt,
          variant,
          quantity,
        },
      ]
    }
    case "REMOVE":
      return state.filter((i) => i.key !== action.key)
    case "SET_QTY":
      return state
        .map((i) =>
          i.key === action.key ? { ...i, quantity: Math.max(1, action.quantity) } : i
        )
    case "CLEAR":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: "ADD", product, variant, quantity })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", key })
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "SET_QTY", key, quantity })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const count = useMemo(() => items.reduce((n, i) => n + i.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((s, i) => s + i.price * i.quantity, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      removeItem,
      setQuantity,
      clear,
    }),
    [items, count, subtotal, isOpen, addItem, removeItem, setQuantity, clear]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
