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

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity, imgSrc } = action.payload
      const key = `${product.id}__${variant}`
      const existing = state.find((i) => i.key === key)
      if (existing) {
        return state.map((i) =>
          i.key === key
            ? { ...i, quantity: i.quantity + quantity, imgSrc: imgSrc || i.imgSrc }
            : i
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
          imgId: product.imgId,
          imgSrc: imgSrc || "",
        },
      ]
    }
    case "REMOVE":
      return state.filter((i) => i.key !== action.payload.key)
    case "SET_QTY": {
      const { key, quantity } = action.payload
      if (quantity <= 0) return state.filter((i) => i.key !== key)
      return state.map((i) => (i.key === key ? { ...i, quantity } : i))
    }
    case "CLEAR":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items])

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0)
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((v) => !v),
      addItem: (product, variant, quantity = 1) => {
        // Capture the already-resolved image URL from the product card's <img>
        // so the cart drawer can render a plain <img> without strk tags
        // (which can't be statically resolved at build time for dynamic keys).
        let imgSrc = ""
        if (typeof document !== "undefined") {
          const el = document.querySelector(
            `img[data-strk-img-id="${product.imgId}"]`
          )
          if (el && el.src && !el.src.startsWith("data:image/svg")) {
            imgSrc = el.src
          }
        }
        dispatch({
          type: "ADD",
          payload: { product, variant, quantity, imgSrc },
        })
        setIsOpen(true)
      },
      removeItem: (key) => dispatch({ type: "REMOVE", payload: { key } }),
      setQuantity: (key, quantity) =>
        dispatch({ type: "SET_QTY", payload: { key, quantity } }),
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
