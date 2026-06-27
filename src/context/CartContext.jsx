import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

const CartContext = createContext(null)
const STORAGE_KEY = "velmora.cart.v1"

function readStoredCart() {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((entry) => entry && entry.productId)
  } catch {
    return []
  }
}

function persist(cart) {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  } catch {
    // ignore quota errors
  }
}

function lineKey(productId, variantId) {
  return `${productId}::${variantId || "default"}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStoredCart())
  const [isOpen, setIsOpen] = useState(false)
  const [justAdded, setJustAdded] = useState(null)

  useEffect(() => {
    persist(items)
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((product, variant, quantity = 1) => {
    if (!product || !product.id) return
    const variantId = variant?.id || (product.variants?.[0]?.id ?? "default")
    const key = lineKey(product.id, variantId)
    setItems((current) => {
      const existing = current.find((line) => line.key === key)
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + quantity } : line,
        )
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          variantId,
          quantity,
          // Snapshot minimal display data so cart works even if catalog is filtered
          name: product.name,
          price: product.price,
          variantLabel: variant?.label || product.variants?.[0]?.label || "",
          eyebrow: product.eyebrow,
        },
      ]
    })
    setJustAdded({ productId: product.id, variantId, key })
    setIsOpen(true)
    window.setTimeout(() => setJustAdded(null), 2400)
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) => {
      if (quantity <= 0) {
        return current.filter((line) => line.key !== key)
      }
      return current.map((line) =>
        line.key === key ? { ...line, quantity } : line,
      )
    })
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((line) => line.key !== key))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, line) => sum + line.quantity, 0)
    const subtotal = items.reduce(
      (sum, line) => sum + line.quantity * (line.price || 0),
      0,
    )
    return {
      items,
      itemCount,
      subtotal,
      isOpen,
      justAdded,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openCart,
      closeCart,
      toggleCart,
    }
  }, [
    items,
    isOpen,
    justAdded,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    openCart,
    closeCart,
    toggleCart,
  ])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return ctx
}