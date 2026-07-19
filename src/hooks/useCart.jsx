import { createContext, useContext, useEffect, useMemo, useReducer, useState, useCallback } from "react"
import { products as productCatalog } from "@/data/products"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora_cart_v1"

const initialState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload && action.payload.items ? action.payload : initialState
    case "ADD": {
      const { product, variant, quantity } = action
      const key = `${product.id}__${variant || "default"}`
      const existing = state.items.find((it) => it.key === key)
      if (existing) {
        return {
          items: state.items.map((it) =>
            it.key === key ? { ...it, quantity: it.quantity + quantity } : it,
          ),
        }
      }
      const productMeta = productCatalog.find((p) => p.id === product.id)
      return {
        items: [
          ...state.items,
          {
            key,
            productId: product.id,
            name: productMeta?.name || product.name,
            price: productMeta?.price ?? product.price,
            imageQuery: productMeta?.imageQueries?.[0] || product.imageQuery,
            variant: variant || "default",
            quantity,
          },
        ],
      }
    }
    case "REMOVE":
      return { items: state.items.filter((it) => it.key !== action.key) }
    case "SET_QUANTITY": {
      const { key, quantity } = action
      if (quantity <= 0) {
        return { items: state.items.filter((it) => it.key !== key) }
      }
      return {
        items: state.items.map((it) => (it.key === key ? { ...it, quantity } : it)),
      }
    }
    case "CLEAR":
      return initialState
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        dispatch({ type: "HYDRATE", payload: parsed })
      }
    } catch (e) {
      // ignore
    } finally {
      setHydrated(true)
    }
  }, [])

  // Persist
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      // ignore
    }
  }, [state, hydrated])

  const addItem = useCallback((product, variant = "default", quantity = 1) => {
    dispatch({ type: "ADD", product, variant, quantity })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", key })
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "SET_QUANTITY", key, quantity })
  }, [])

  const clear = useCallback(() => {
    dispatch({ type: "CLEAR" })
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => {
    const itemCount = state.items.reduce((n, it) => n + it.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, it) => sum + (it.price || 0) * it.quantity,
      0,
    )
    return {
      items: state.items,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      setQuantity,
      clear,
      isOpen,
      openCart,
      closeCart,
      hydrated,
    }
  }, [state, isOpen, addItem, removeItem, setQuantity, clear, openCart, closeCart, hydrated])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
