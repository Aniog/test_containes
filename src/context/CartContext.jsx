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
          tone,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
          shortDesc: product.shortDesc,
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

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.quantity, 0)
    const subtotal = items.reduce((n, i) => n + i.quantity * i.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem: (product, tone, quantity = 1) => {
        dispatch({ type: "ADD", product, tone, quantity })
        setIsOpen(true)
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQuantity: (key, quantity) => dispatch({ type: "SET_QTY", key, quantity }),
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
