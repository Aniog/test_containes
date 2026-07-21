import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { findProduct } from "../data/products"

const STORAGE_KEY = "velmora.cart.v1"

const CartContext = createContext(null)

const buildLineKey = (productId, variant) => `${productId}::${variant || "default"}`

const readStorage = () => {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (line) =>
        line &&
        typeof line.productId === "string" &&
        typeof line.qty === "number" &&
        line.qty > 0
    )
  } catch {
    return []
  }
}

const writeStorage = (lines) => {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  } catch {
    /* noop */
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => readStorage())
  const [isOpen, setIsOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(false)

  useEffect(() => {
    writeStorage(lines)
  }, [lines])

  const openCart = useCallback(() => {
    setIsOpen(true)
    setJustAdded(false)
  }, [])

  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback(
    (productId, variant = "gold", qty = 1) => {
      const product = findProduct(productId)
      if (!product) return
      const key = buildLineKey(productId, variant)
      setLines((current) => {
        const existing = current.find((line) => line.key === key)
        if (existing) {
          return current.map((line) =>
            line.key === key ? { ...line, qty: line.qty + qty } : line
          )
        }
        return [
          ...current,
          {
            key,
            productId,
            variant,
            qty,
            addedAt: Date.now(),
          },
        ]
      })
      setJustAdded(true)
      setIsOpen(true)
    },
    []
  )

  const removeItem = useCallback((key) => {
    setLines((current) => current.filter((line) => line.key !== key))
  }, [])

  const updateQty = useCallback((key, qty) => {
    if (qty <= 0) {
      setLines((current) => current.filter((line) => line.key !== key))
      return
    }
    setLines((current) =>
      current.map((line) => (line.key === key ? { ...line, qty } : line))
    )
  }, [])

  const clearCart = useCallback(() => {
    setLines([])
  }, [])

  const detailedLines = useMemo(() => {
    return lines
      .map((line) => {
        const product = findProduct(line.productId)
        if (!product) return null
        return {
          ...line,
          product,
          lineTotal: product.price * line.qty,
        }
      })
      .filter(Boolean)
  }, [lines])

  const itemCount = useMemo(
    () => lines.reduce((acc, line) => acc + line.qty, 0),
    [lines]
  )

  const subtotal = useMemo(
    () => detailedLines.reduce((acc, line) => acc + line.lineTotal, 0),
    [detailedLines]
  )

  const value = useMemo(
    () => ({
      lines: detailedLines,
      rawLines: lines,
      itemCount,
      subtotal,
      isOpen,
      justAdded,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQty,
      clearCart,
    }),
    [
      detailedLines,
      lines,
      itemCount,
      subtotal,
      isOpen,
      justAdded,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQty,
      clearCart,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}
