import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora:cart:v1"

const initialState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return action.payload && Array.isArray(action.payload.items)
        ? action.payload
        : state
    case "add": {
      const { product, tone, quantity = 1 } = action
      const key = `${product.id}:${tone}`
      const existing = state.items.find((i) => i.key === key)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + quantity } : i,
          ),
        }
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            id: product.id,
            name: product.name,
            price: product.price,
            tone,
            quantity,
            image: product.images?.[0] || null,
            titleId: product.titleId,
            descId: product.descId,
          },
        ],
      }
    }
    case "increment": {
      return {
        ...state,
        items: state.items.map((i) =>
          i.key === action.key ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      }
    }
    case "decrement": {
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.key === action.key ? { ...i, quantity: i.quantity - 1 } : i,
          )
          .filter((i) => i.quantity > 0),
      }
    }
    case "remove":
      return {
        ...state,
        items: state.items.filter((i) => i.key !== action.key),
      }
    case "clear":
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        dispatch({ type: "hydrate", payload: parsed })
      }
    } catch (e) {
      console.warn("[cart] could not hydrate", e)
    } finally {
      setHydrated(true)
    }
  }, [])

  // Persist on change
  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      console.warn("[cart] could not persist", e)
    }
  }, [state, hydrated])

  const addItem = useCallback(
    (product, tone = product.tones?.[0] || "gold", quantity = 1) => {
      dispatch({ type: "add", product, tone, quantity })
      setIsOpen(true)
    },
    [],
  )

  const increment = useCallback(
    (key) => dispatch({ type: "increment", key }),
    [],
  )
  const decrement = useCallback(
    (key) => dispatch({ type: "decrement", key }),
    [],
  )
  const removeItem = useCallback(
    (key) => dispatch({ type: "remove", key }),
    [],
  )
  const clear = useCallback(() => dispatch({ type: "clear" }), [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => {
    const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = state.items.reduce(
      (sum, i) => sum + i.quantity * i.price,
      0,
    )
    return {
      ...state,
      hydrated,
      isOpen,
      itemCount,
      subtotal,
      addItem,
      increment,
      decrement,
      removeItem,
      clear,
      openCart,
      closeCart,
    }
  }, [
    state,
    hydrated,
    isOpen,
    addItem,
    increment,
    decrement,
    removeItem,
    clear,
    openCart,
    closeCart,
  ])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
