import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

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

// A cart line is uniquely identified by productId + tone.
function lineKey(productId, tone) {
  return `${productId}__${tone}`
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, tone, quantity } = action
      const key = lineKey(product.id, tone)
      const existing = state.find((l) => l.key === key)
      if (existing) {
        return state.map((l) =>
          l.key === key ? { ...l, quantity: l.quantity + quantity } : l
        )
      }
      return [
        ...state,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
          shortDescription: product.shortDescription,
        },
      ]
    }
    case "UPDATE_QTY": {
      const { key, quantity } = action
      if (quantity <= 0) {
        return state.filter((l) => l.key !== key)
      }
      return state.map((l) => (l.key === key ? { ...l, quantity } : l))
    }
    case "REMOVE":
      return state.filter((l) => l.key !== action.key)
    case "CLEAR":
      return []
    case "HYDRATE":
      return action.lines || []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, [], loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      /* ignore */
    }
  }, [lines])

  const value = useMemo(() => {
    const count = lines.reduce((sum, l) => sum + l.quantity, 0)
    const subtotal = lines.reduce((sum, l) => sum + l.quantity * l.price, 0)
    return {
      lines,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem: (product, tone, quantity = 1) => {
        dispatch({ type: "ADD", product, tone, quantity })
        setIsOpen(true)
      },
      updateQuantity: (key, quantity) =>
        dispatch({ type: "UPDATE_QTY", key, quantity }),
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      clear: () => dispatch({ type: "CLEAR" }),
    }
  }, [lines, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
