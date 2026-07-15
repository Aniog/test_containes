import { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from "react"

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
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item,
        )
      }
      return [
        ...state,
        {
          key,
          id: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          titleId: product.titleId,
          imgId: product.imgId,
        },
      ]
    }
    case "REMOVE":
      return state.filter((item) => item.key !== action.key)
    case "SET_QTY": {
      const { key, quantity } = action
      if (quantity <= 0) return state.filter((item) => item.key !== key)
      return state.map((item) => (item.key === key ? { ...item, quantity } : item))
    }
    case "CLEAR":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, loadInitial)
  const [drawerOpen, setDrawerOpen] = useReducer((s, a) => (typeof a === "boolean" ? a : !s), false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: "ADD", product, variant, quantity })
    setDrawerOpen(true)
  }, [])

  const removeItem = useCallback((key) => dispatch({ type: "REMOVE", key }), [])
  const setQuantity = useCallback((key, quantity) => dispatch({ type: "SET_QTY", key, quantity }), [])
  const clearCart = useCallback(() => dispatch({ type: "CLEAR" }), [])
  const openDrawer = useCallback(() => setDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  const count = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items])
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.quantity * item.price, 0), [items])

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      drawerOpen,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      openDrawer,
      closeDrawer,
    }),
    [items, count, subtotal, drawerOpen, addItem, removeItem, setQuantity, clearCart, openDrawer, closeDrawer],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
