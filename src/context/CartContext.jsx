import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react"

const STORAGE_KEY = "velmora.cart.v1"

const CartContext = createContext(null)

function loadInitial() {
  if (typeof window === "undefined") return { items: [] }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { items: [] }
    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.items)) return { items: [] }
    return parsed
  } catch (e) {
    return { items: [] }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, qty } = action
      const key = `${product.id}__${variant.id}`
      const existing = state.items.find((it) => it.key === key)
      if (existing) {
        return {
          items: state.items.map((it) =>
            it.key === key ? { ...it, qty: it.qty + qty } : it,
          ),
        }
      }
      return {
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            imgId: product.imgId,
            variant: variant.id,
            variantName: variant.name,
            qty,
          },
        ],
      }
    }
    case "REMOVE":
      return { items: state.items.filter((it) => it.key !== action.key) }
    case "SET_QTY":
      return {
        items: state.items
          .map((it) =>
            it.key === action.key ? { ...it, qty: Math.max(0, action.qty) } : it,
          )
          .filter((it) => it.qty > 0),
      }
    case "CLEAR":
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      // ignore quota / private mode
    }
  }, [state])

  const addItem = useCallback((product, variant, qty = 1) => {
    dispatch({ type: "ADD", product, variant, qty })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", key })
  }, [])

  const setQty = useCallback((key, qty) => {
    dispatch({ type: "SET_QTY", key, qty })
  }, [])

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" })
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => {
    const items = state.items
    const count = items.reduce((s, it) => s + it.qty, 0)
    const subtotal = items.reduce((s, it) => s + it.qty * it.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQty,
      clear,
      openCart,
      closeCart,
    }
  }, [state, isOpen, addItem, removeItem, setQty, clear, openCart, closeCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
