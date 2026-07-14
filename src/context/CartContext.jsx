import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react"

const CartContext = createContext(null)

const STORAGE_KEY = "velmora-cart"

function loadInitialCart() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// A cart line is uniquely identified by product id + chosen variant.
function lineKey(productId, variant) {
  return `${productId}::${variant}`
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity, imageUrl } = action
      const key = lineKey(product.id, variant)
      const existing = state.find((l) => l.key === key)
      if (existing) {
        return state.map((l) =>
          l.key === key
            ? {
                ...l,
                quantity: l.quantity + quantity,
                imageUrl: imageUrl || l.imageUrl,
              }
            : l
        )
      }
      return [
        ...state,
        {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          titleId: product.titleId,
          imgId: product.imgId,
          imageUrl: imageUrl || "",
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
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, loadInitialCart)
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
      addItem: (product, variant, quantity = 1) => {
        // Capture the resolved stock image URL from the DOM so the cart
        // drawer can render a plain <img> (no data-strk-img placeholder).
        let imageUrl = ""
        try {
          const imgEl = document.querySelector(
            `img[data-strk-img-id="${product.imgId}"]`
          )
          if (imgEl && imgEl.src && !imgEl.src.startsWith("data:image/svg")) {
            imageUrl = imgEl.src
          }
        } catch {
          /* ignore */
        }
        dispatch({ type: "ADD", product, variant, quantity, imageUrl })
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
