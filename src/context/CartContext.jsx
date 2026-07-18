import { createContext, useContext, useMemo, useReducer, useState, useCallback } from "react"

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
      const { product, variant, quantity } = action
      const key = `${product.id}__${variant}`
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
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          titleId: product.titleId,
          descId: product.descId,
          imgId: product.imgId,
          shortDescription: product.shortDescription,
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

  // Persist to localStorage whenever items change.
  useMemo(() => {
    if (typeof window === "undefined") return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: "ADD", product, variant, quantity })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", key })
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "SET_QTY", key, quantity })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  )
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem,
      removeItem,
      setQuantity,
      clear,
    }),
    [items, count, subtotal, isOpen, addItem, removeItem, setQuantity, clear]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
