import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

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
      const { product, tone, quantity } = action
      const key = `${product.id}__${tone}`
      const existing = state.find((item) => item.key === key)
      if (existing) {
        return state.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
          titleId: product.titleId,
          descId: product.descId,
          imgId: product.images[0].imgId,
        },
      ]
    }
    case "REMOVE":
      return state.filter((item) => item.key !== action.key)
    case "SET_QTY": {
      if (action.quantity <= 0) {
        return state.filter((item) => item.key !== action.key)
      }
      return state.map((item) =>
        item.key === action.key ? { ...item, quantity: action.quantity } : item
      )
    }
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

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    )
    return {
      items,
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
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQuantity: (key, quantity) =>
        dispatch({ type: "SET_QTY", key, quantity }),
      clear: () => dispatch({ type: "CLEAR" }),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
