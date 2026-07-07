import React, { createContext, useContext, useEffect, useReducer, useState, useCallback } from "react"
import { products } from "@/data/products"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora.cart.v1"

const initialState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload && Array.isArray(action.payload.items) ? action.payload : state
    case "add": {
      const { id, qty = 1, variant } = action
      const idx = state.items.findIndex((it) => it.id === id && (it.variant || "default") === (variant || "default"))
      if (idx >= 0) {
        const next = [...state.items]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return { ...state, items: next }
      }
      return {
        ...state,
        items: [
          ...state.items,
          { id, qty, variant: variant || "default", addedAt: Date.now() },
        ],
      }
    }
    case "updateQty": {
      const { id, qty, variant } = action
      if (qty <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (it) => !(it.id === id && (it.variant || "default") === (variant || "default"))
          ),
        }
      }
      return {
        ...state,
        items: state.items.map((it) =>
          it.id === id && (it.variant || "default") === (variant || "default")
            ? { ...it, qty }
            : it
        ),
      }
    }
    case "remove": {
      const { id, variant } = action
      return {
        ...state,
        items: state.items.filter(
          (it) => !(it.id === id && (it.variant || "default") === (variant || "default"))
        ),
      }
    }
    case "clear":
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isOpen, setIsOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(null)

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) dispatch({ type: "hydrate", payload: JSON.parse(raw) })
    } catch {
      /* ignore */
    }
  }, [])

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* ignore */
    }
  }, [state])

  const enrichedItems = state.items
    .map((it) => {
      const product = products.find((p) => p.id === it.id)
      if (!product) return null
      return { ...it, product, lineTotal: product.price * it.qty }
    })
    .filter(Boolean)

  const subtotal = enrichedItems.reduce((sum, it) => sum + it.lineTotal, 0)
  const itemCount = enrichedItems.reduce((sum, it) => sum + it.qty, 0)
  const shipping = subtotal === 0 ? 0 : subtotal >= 75 ? 0 : 8
  const total = subtotal + shipping

  const addItem = useCallback(
    (id, qty = 1, variant) => {
      dispatch({ type: "add", id, qty, variant })
      const product = products.find((p) => p.id === id)
      if (product) {
        setJustAdded(product.name)
        setIsOpen(true)
        window.setTimeout(() => setJustAdded(null), 2400)
      }
    },
    []
  )
  const updateQty = useCallback(
    (id, qty, variant) => dispatch({ type: "updateQty", id, qty, variant }),
    []
  )
  const removeItem = useCallback(
    (id, variant) => dispatch({ type: "remove", id, variant }),
    []
  )
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = {
    items: enrichedItems,
    raw: state.items,
    subtotal,
    shipping,
    total,
    itemCount,
    isOpen,
    justAdded,
    addItem,
    updateQty,
    removeItem,
    openCart,
    closeCart,
    clear: () => dispatch({ type: "clear" }),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
