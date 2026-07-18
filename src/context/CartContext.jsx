import { createContext, useContext, useMemo, useReducer, useState, useCallback } from "react"

const CartContext = createContext(null)

const PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, variant, quantity } = action.payload
      const key = `${product.id}__${variant}`
      const existing = state.items[key]
      const nextQty = (existing?.quantity || 0) + quantity
      const items = {
        ...state.items,
        [key]: {
          key,
          product,
          variant,
          quantity: nextQty,
          imgId: product.imgId,
          titleId: product.titleId,
          descId: product.descId,
        },
      }
      return { items }
    }
    case "SET_QTY": {
      const { key, quantity } = action.payload
      if (quantity <= 0) {
        const items = { ...state.items }
        delete items[key]
        return { items }
      }
      return {
        items: {
          ...state.items,
          [key]: { ...state.items[key], quantity },
        },
      }
    }
    case "REMOVE": {
      const items = { ...state.items }
      delete items[action.payload.key]
      return { items }
    }
    case "CLEAR":
      return { items: {} }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} })
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({ type: "ADD", payload: { product, variant, quantity } })
    setIsOpen(true)
  }, [])

  const setQuantity = useCallback((key, quantity) => {
    dispatch({ type: "SET_QTY", payload: { key, quantity } })
  }, [])

  const removeItem = useCallback((key) => {
    dispatch({ type: "REMOVE", payload: { key } })
  }, [])

  const clear = useCallback(() => dispatch({ type: "CLEAR" }), [])

  const items = useMemo(() => Object.values(state.items), [state.items])
  const count = useMemo(() => items.reduce((n, i) => n + i.quantity, 0), [items])
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      addItem,
      setQuantity,
      removeItem,
      clear,
    }),
    [items, count, subtotal, isOpen, addItem, setQuantity, removeItem, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

export { PLACEHOLDER }
