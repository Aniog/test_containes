import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react"
import { getProductById } from "@/data/products"

const STORAGE_KEY = "velmora:cart:v1"

const CartContext = createContext(null)

const initialState = {
  items: [],
  isOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.payload ?? [] }
    case "ADD": {
      const { productId, variantId, quantity } = action.payload
      const existingIndex = state.items.findIndex(
        (i) => i.productId === productId && i.variantId === variantId,
      )
      if (existingIndex >= 0) {
        const next = [...state.items]
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        }
        return { ...state, items: next, isOpen: true }
      }
      return {
        ...state,
        items: [
          ...state.items,
          { productId, variantId, quantity, lineId: makeLineId() },
        ],
        isOpen: true,
      }
    }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((i) => i.lineId !== action.payload.lineId),
      }
    case "SET_QUANTITY": {
      const { lineId, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.lineId !== lineId),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.lineId === lineId ? { ...i, quantity } : i,
        ),
      }
    }
    case "CLEAR":
      return { ...state, items: [] }
    case "OPEN":
      return { ...state, isOpen: true }
    case "CLOSE":
      return { ...state, isOpen: false }
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen }
    default:
      return state
  }
}

function makeLineId() {
  return `line_${Date.now().toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`
}

function loadFromStorage() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
  } catch {
    return []
  }
}

function saveToStorage(items) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    // ignore quota errors
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    dispatch({ type: "HYDRATE", payload: loadFromStorage() })
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) saveToStorage(state.items)
  }, [state.items, hydrated])

  const addItem = useCallback((productId, variantId, quantity = 1) => {
    dispatch({
      type: "ADD",
      payload: { productId, variantId, quantity },
    })
  }, [])

  const removeItem = useCallback((lineId) => {
    dispatch({ type: "REMOVE", payload: { lineId } })
  }, [])

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QUANTITY", payload: { lineId, quantity } })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const openCart = useCallback(() => dispatch({ type: "OPEN" }), [])
  const closeCart = useCallback(() => dispatch({ type: "CLOSE" }), [])
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE" }), [])

  const decoratedItems = useMemo(
    () =>
      state.items
        .map((line) => {
          const product = getProductById(line.productId)
          if (!product) return null
          const variant = product.variants.find(
            (v) => v.id === line.variantId,
          )
          return {
            ...line,
            product,
            variant,
            lineTotal: product.price * line.quantity,
          }
        })
        .filter(Boolean),
    [state.items],
  )

  const itemCount = useMemo(
    () => decoratedItems.reduce((sum, i) => sum + i.quantity, 0),
    [decoratedItems],
  )

  const subtotal = useMemo(
    () => decoratedItems.reduce((sum, i) => sum + i.lineTotal, 0),
    [decoratedItems],
  )

  const value = useMemo(
    () => ({
      items: decoratedItems,
      rawItems: state.items,
      itemCount,
      subtotal,
      isOpen: state.isOpen,
      hydrated,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
      toggleCart,
    }),
    [
      decoratedItems,
      state.items,
      state.isOpen,
      itemCount,
      subtotal,
      hydrated,
      addItem,
      removeItem,
      setQuantity,
      clear,
      openCart,
      closeCart,
      toggleCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider />")
  }
  return ctx
}
