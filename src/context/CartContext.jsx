import { createContext, useContext, useReducer, useEffect } from "react"

const CartContext = createContext()

const CART_STORAGE_KEY = "velmora_cart"

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, variant, quantity } = action.payload
      const key = `${product.id}-${variant}`
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
          product,
          variant,
          quantity,
        },
      ]
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.key !== action.payload)
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.key === action.payload.key
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCart)

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (product, variant = "gold", quantity = 1) => {
    dispatch({ type: "ADD_ITEM", payload: { product, variant, quantity } })
  }

  const removeItem = (key) => {
    dispatch({ type: "REMOVE_ITEM", payload: key })
  }

  const updateQuantity = (key, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { key, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error("useCart must be used within CartProvider")
  return context
}