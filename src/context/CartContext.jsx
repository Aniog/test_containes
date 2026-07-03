import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { getProductById } from "@/data/products"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora_cart_v1"

const initialState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, variant, qty } = action
      const existing = state.items.find((it) => it.id === id && it.variant === variant)
      if (existing) {
        return {
          items: state.items.map((it) =>
            it.id === id && it.variant === variant ? { ...it, qty: it.qty + qty } : it,
          ),
        }
      }
      return { items: [...state.items, { id, variant, qty }] }
    }
    case "SET_QTY": {
      const { id, variant, qty } = action
      if (qty <= 0) {
        return {
          items: state.items.filter((it) => !(it.id === id && it.variant === variant)),
        }
      }
      return {
        items: state.items.map((it) =>
          it.id === id && it.variant === variant ? { ...it, qty } : it,
        ),
      }
    }
    case "REMOVE": {
      const { id, variant } = action
      return {
        items: state.items.filter((it) => !(it.id === id && it.variant === variant)),
      }
    }
    case "CLEAR":
      return { items: [] }
    case "HYDRATE":
      return action.payload || initialState
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
    if (!parsed || !Array.isArray(parsed.items)) return initialState
    return { items: parsed.items.filter((it) => it && it.id && it.variant) }
  } catch {
    return initialState
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [hydrated, setHydrated] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch({ type: "HYDRATE", payload: readStorage() })
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* noop */
    }
  }, [state, hydrated])

  const addItem = useCallback((id, variant = "gold", qty = 1) => {
    dispatch({ type: "ADD", id, variant, qty })
    setIsOpen(true)
  }, [])

  const setQuantity = useCallback((id, variant, qty) => {
    dispatch({ type: "SET_QTY", id, variant, qty })
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: "REMOVE", id, variant })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const decoratedItems = useMemo(() => {
    return state.items
      .map((it) => {
        const product = getProductById(it.id)
        if (!product) return null
        return {
          ...it,
          product,
          lineTotal: product.price * it.qty,
        }
      })
      .filter(Boolean)
  }, [state.items])

  const totals = useMemo(() => {
    const subtotal = decoratedItems.reduce((sum, it) => sum + it.lineTotal, 0)
    const itemCount = decoratedItems.reduce((sum, it) => sum + it.qty, 0)
    const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 8
    const total = subtotal + shipping
    return { subtotal, shipping, total, itemCount }
  }, [decoratedItems])

  const value = {
    items: decoratedItems,
    rawItems: state.items,
    totals,
    isOpen,
    hydrated,
    addItem,
    setQuantity,
    removeItem,
    clear,
    openCart,
    closeCart,
    toggleCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
