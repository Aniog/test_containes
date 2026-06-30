import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react"
import { products, getProductBySlug } from "@/data/products"

const STORAGE_KEY = "velmora_cart_v1"

const CartContext = createContext(null)

function loadInitialItems() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .map((line) => {
        const product = getProductBySlug(line.slug)
        if (!product) return null
        const tone = line.tone || product.tone || "gold"
        const quantity = Math.max(1, Number(line.quantity) || 1)
        return {
          lineId: `${line.slug}__${tone}`,
          slug: product.slug,
          name: product.name,
          price: product.price,
          tone,
          imageId: product.images?.[0]?.imgId,
          quantity,
        }
      })
      .filter(Boolean)
  } catch {
    return []
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { slug, tone, quantity } = action.payload
      const lineId = `${slug}__${tone}`
      const existing = state.find((line) => line.lineId === lineId)
      if (existing) {
        return state.map((line) =>
          line.lineId === lineId
            ? { ...line, quantity: line.quantity + quantity }
            : line,
        )
      }
      return [...state, { lineId, ...action.payload }]
    }
    case "REMOVE": {
      return state.filter((line) => line.lineId !== action.payload.lineId)
    }
    case "SET_QUANTITY": {
      const { lineId, quantity } = action.payload
      if (quantity <= 0) {
        return state.filter((line) => line.lineId !== lineId)
      }
      return state.map((line) =>
        line.lineId === lineId ? { ...line, quantity } : line,
      )
    }
    case "CLEAR":
      return []
    case "HYDRATE":
      return action.payload
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], loadInitialItems)
  const [isOpen, setIsOpen] = useState(false)
  const [pulseToken, setPulseToken] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore quota / privacy errors */
    }
  }, [items])

  const addToCart = useCallback(({ slug, tone = "gold", quantity = 1 }) => {
    const product = getProductBySlug(slug)
    if (!product) return
    dispatch({
      type: "ADD",
      payload: {
        slug,
        tone,
        quantity,
        name: product.name,
        price: product.price,
        imageId: product.images?.[0]?.imgId,
      },
    })
    setPulseToken((t) => t + 1)
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((lineId) => {
    dispatch({ type: "REMOVE", payload: { lineId } })
  }, [])

  const setQuantity = useCallback((lineId, quantity) => {
    dispatch({ type: "SET_QUANTITY", payload: { lineId, quantity } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" })
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const itemCount = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items],
  )
  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      isOpen,
      pulseToken,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      isOpen,
      pulseToken,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>")
  }
  return ctx
}
