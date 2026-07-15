import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react"
import { PRODUCTS } from "@/data/products"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora_cart_v1"

const findProduct = (id) => PRODUCTS.find((p) => p.id === id)

const initialState = {
  items: [], // { id, variant, qty }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { id, variant, qty = 1 } = action
      const existing = state.items.find((i) => i.id === id && i.variant === variant)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === id && i.variant === variant ? { ...i, qty: i.qty + qty } : i,
          ),
        }
      }
      return { ...state, items: [...state.items, { id, variant, qty }] }
    }
    case "REMOVE": {
      const { id, variant } = action
      return { ...state, items: state.items.filter((i) => !(i.id === id && i.variant === variant)) }
    }
    case "SET_QTY": {
      const { id, variant, qty } = action
      if (qty <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => !(i.id === id && i.variant === variant)),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === id && i.variant === variant ? { ...i, qty } : i,
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

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", state: parsed })
        }
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  // Persist on change
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore
    }
  }, [state, hydrated])

  const addItem = useCallback((id, variant = "gold", qty = 1) => {
    dispatch({ type: "ADD", id, variant, qty })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: "REMOVE", id, variant })
  }, [])

  const setQty = useCallback((id, variant, qty) => {
    dispatch({ type: "SET_QTY", id, variant, qty })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const itemsDetailed = useMemo(() => {
    return state.items
      .map((i) => {
        const product = findProduct(i.id)
        if (!product) return null
        return {
          ...i,
          product,
          lineTotal: product.price * i.qty,
        }
      })
      .filter(Boolean)
  }, [state.items])

  const itemCount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.qty, 0),
    [state.items],
  )

  const subtotal = useMemo(
    () => itemsDetailed.reduce((sum, i) => sum + i.lineTotal, 0),
    [itemsDetailed],
  )

  const value = {
    items: state.items,
    itemsDetailed,
    itemCount,
    subtotal,
    isOpen,
    addItem,
    removeItem,
    setQty,
    clear,
    openCart,
    closeCart,
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
