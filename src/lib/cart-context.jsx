import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

const CartContext = createContext(null)
const UIContext = createContext(null)

const STORAGE_KEY = "velmora_cart_v1"

function loadInitial() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch (e) {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const { id, tone, qty } = action
      const key = `${id}__${tone}`
      const existing = state.find((line) => line.key === key)
      if (existing) {
        return state.map((line) =>
          line.key === key ? { ...line, qty: line.qty + qty } : line
        )
      }
      return [...state, { key, id, tone, qty }]
    }
    case "setQty": {
      const { key, qty } = action
      if (qty <= 0) return state.filter((line) => line.key !== key)
      return state.map((line) => (line.key === key ? { ...line, qty } : line))
    }
    case "remove": {
      return state.filter((line) => line.key !== action.key)
    }
    case "clear":
      return []
    default:
      return state
  }
}

export function AppProviders({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, undefined, loadInitial)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch (e) {}
  }, [cart])

  // expose navigate for the route bridge
  useEffect(() => {
    return () => {}
  }, [])

  const cartValue = useMemo(
    () => ({
      cart,
      addItem: (item) => dispatch({ type: "add", ...item }),
      setQty: (key, qty) => dispatch({ type: "setQty", key, qty }),
      removeItem: (key) => dispatch({ type: "remove", key }),
      clear: () => dispatch({ type: "clear" }),
      openCart: () => setDrawerOpen(true),
      closeCart: () => setDrawerOpen(false),
    }),
    [cart]
  )

  const uiValue = useMemo(
    () => ({
      drawerOpen,
      setDrawerOpen,
      mobileNavOpen,
      setMobileNavOpen,
    }),
    [drawerOpen, mobileNavOpen]
  )

  return (
    <UIContext.Provider value={uiValue}>
      <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
    </UIContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within AppProviders")
  return ctx
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error("useUI must be used within AppProviders")
  return ctx
}
