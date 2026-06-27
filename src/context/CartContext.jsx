import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

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

// A cart line: { key, productId, name, price, material, quantity, imgId }
function lineKey(productId, material) {
  return `${productId}__${material}`
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, material, quantity = 1 } = action
      const key = lineKey(product.id, material)
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
          material,
          quantity,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
          tagline: product.tagline,
        },
      ]
    }
    case "REMOVE":
      return state.filter((l) => l.key !== action.key)
    case "SET_QTY": {
      const { key, quantity } = action
      if (quantity <= 0) return state.filter((l) => l.key !== key)
      return state.map((l) => (l.key === key ? { ...l, quantity } : l))
    }
    case "CLEAR":
      return []
    case "HYDRATE":
      return action.lines
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
      addItem: (product, material, quantity = 1) => {
        dispatch({ type: "ADD", product, material, quantity })
        setIsOpen(true)
      },
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      setQuantity: (key, quantity) =>
        dispatch({ type: "SET_QTY", key, quantity }),
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
