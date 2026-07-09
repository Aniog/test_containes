import React, { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

const initialState = { items: [], isOpen: false }

function sameLine(a, b) {
  return a.productId === b.productId && a.tone === b.tone
}

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.items || [] }
    case "ADD": {
      const incoming = action.item
      const existing = state.items.find((it) => sameLine(it, incoming))
      let items
      if (existing) {
        items = state.items.map((it) =>
          sameLine(it, incoming)
            ? { ...it, quantity: it.quantity + incoming.quantity }
            : it
        )
      } else {
        items = [...state.items, incoming]
      }
      return { ...state, items, isOpen: true }
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((it) => it.lineId !== action.lineId) }
    case "SET_QTY": {
      const items = state.items
        .map((it) =>
          it.lineId === action.lineId
            ? { ...it, quantity: Math.max(1, action.quantity) }
            : it
        )
        .filter((it) => it.quantity > 0)
      return { ...state, items }
    }
    case "OPEN":
      return { ...state, isOpen: true }
    case "CLOSE":
      return { ...state, isOpen: false }
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen }
    case "CLEAR":
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed && Array.isArray(parsed.items)) {
          dispatch({ type: "HYDRATE", items: parsed.items })
        }
      }
    } catch {
      // ignore
    }
  }, [])

  // persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }))
    } catch {
      // ignore
    }
  }, [state.items])

  // lock body scroll when drawer open
  useEffect(() => {
    if (state.isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [state.isOpen])

  const addToCart = useCallback((product, { tone = "gold", quantity = 1 } = {}) => {
    const lineId = `${product.id}__${tone}`
    dispatch({
      type: "ADD",
      item: {
        lineId,
        productId: product.id,
        name: product.name,
        price: product.price,
        tone,
        quantity,
        imgId: product.imgId,
        titleId: product.titleId,
        descId: product.descId,
      },
    })
  }, [])

  const removeFromCart = useCallback((lineId) => {
    dispatch({ type: "REMOVE", lineId })
  }, [])

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QTY", lineId, quantity })
  }, [])

  const openCart = useCallback(() => dispatch({ type: "OPEN" }), [])
  const closeCart = useCallback(() => dispatch({ type: "CLOSE" }), [])
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const count = useMemo(() => state.items.reduce((n, it) => n + it.quantity, 0), [state.items])
  const subtotal = useMemo(
    () => state.items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [state.items]
  )

  const value = useMemo(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      count,
      subtotal,
      addToCart,
      removeFromCart,
      setQuantity,
      openCart,
      closeCart,
      clearCart,
    }),
    [state.items, state.isOpen, count, subtotal, addToCart, removeFromCart, setQuantity, openCart, closeCart, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
