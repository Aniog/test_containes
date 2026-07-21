import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"
import { getProduct } from "@/data/products"

const CartContext = createContext(null)
const STORAGE_KEY = "velmora-cart-v1"

function readStoredCart() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const { productId, variant = "gold", quantity = 1 } = action
      const existing = state.find((i) => i.productId === productId && i.variant === variant)
      if (existing) {
        return state.map((i) =>
          i.productId === productId && i.variant === variant
            ? { ...i, quantity: Math.min(99, i.quantity + quantity) }
            : i,
        )
      }
      return [...state, { productId, variant, quantity }]
    }
    case "remove":
      return state.filter((i) => !(i.productId === action.productId && i.variant === action.variant))
    case "setQuantity": {
      const { productId, variant, quantity } = action
      if (quantity <= 0) {
        return state.filter((i) => !(i.productId === productId && i.variant === variant))
      }
      return state.map((i) =>
        i.productId === productId && i.variant === variant
          ? { ...i, quantity: Math.min(99, quantity) }
          : i,
      )
    }
    case "clear":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, readStoredCart)
  const [isOpen, setIsOpen] = useState(false)
  const [lastAdded, setLastAdded] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage unavailable — cart stays in memory
    }
  }, [items])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const value = useMemo(() => {
    const detailed = items
      .map((item) => {
        const product = getProduct(item.productId)
        return product ? { ...item, product, lineTotal: product.price * item.quantity } : null
      })
      .filter(Boolean)

    const count = detailed.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = detailed.reduce((sum, i) => sum + i.lineTotal, 0)

    return {
      items: detailed,
      count,
      subtotal,
      isOpen,
      lastAdded,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem: (productId, options = {}) => {
        dispatch({ type: "add", productId, ...options })
        setLastAdded({ productId, at: Date.now() })
        setIsOpen(true)
      },
      removeItem: (productId, variant) => dispatch({ type: "remove", productId, variant }),
      setQuantity: (productId, variant, quantity) =>
        dispatch({ type: "setQuantity", productId, variant, quantity }),
      clearCart: () => dispatch({ type: "clear" }),
    }
  }, [items, isOpen, lastAdded])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
