import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart-v1"

function loadInitial() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

// A cart line = { id, name, price, color, qty, imgId1, imgId2, titleId, descId }
// Line key combines product id + color so different tones are separate lines.
function lineKey(productId, color) {
  return `${productId}__${color}`
}

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const { product, color, qty } = action
      const key = lineKey(product.id, color)
      const existing = state.find((l) => l.key === key)
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, qty: l.qty + qty } : l
        )
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          color,
          qty,
          imgId1: product.imgId1,
          imgId2: product.imgId2,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    }
    case "setQty": {
      const { key, qty } = action
      if (qty <= 0) return state.filter((l) => l.key !== key)
      return state.map((l) => (l.key === key ? { ...l, qty } : l))
    }
    case "remove":
      return state.filter((l) => l.key !== action.key)
    case "clear":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {}
  }, [lines])

  const addToCart = (product, color, qty = 1) => {
    dispatch({ type: "add", product, color, qty })
    setIsOpen(true)
  }

  const setQty = (key, qty) => dispatch({ type: "setQty", key, qty })
  const removeLine = (key) => dispatch({ type: "remove", key })
  const clearCart = () => dispatch({ type: "clear" })
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const count = useMemo(() => lines.reduce((n, l) => n + l.qty, 0), [lines])
  const subtotal = useMemo(
    () => lines.reduce((n, l) => n + l.qty * l.price, 0),
    [lines]
  )

  const value = {
    lines,
    count,
    subtotal,
    isOpen,
    addToCart,
    setQty,
    removeLine,
    clearCart,
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
