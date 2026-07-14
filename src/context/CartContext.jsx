import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { productById } from "@/data/products"

const STORAGE_KEY = "velmora-cart-v1"

const CartContext = createContext(null)

const readStored = () => {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeStored = (items) => {
  if (typeof window === "undefined") return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch {
    /* no-op */
  }
}

const buildLine = (productId, tone, quantity) => {
  const product = productById(productId)
  if (!product) return null
  return {
    lineId: `${productId}__${tone}`,
    productId,
    slug: product.slug,
    name: product.name,
    price: product.price,
    image: product.images?.[0] || null,
    tone,
    quantity,
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStored())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    writeStored(items)
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((o) => !o), [])

  const addItem = useCallback(
    (productId, { tone = "gold", quantity = 1 } = {}) => {
      setItems((current) => {
        const lineId = `${productId}__${tone}`
        const existing = current.find((it) => it.lineId === lineId)
        if (existing) {
          return current.map((it) =>
            it.lineId === lineId ? { ...it, quantity: it.quantity + quantity } : it,
          )
        }
        const built = buildLine(productId, tone, quantity)
        if (!built) return current
        return [...current, built]
      })
      setIsOpen(true)
    },
    [],
  )

  const updateQuantity = useCallback((lineId, quantity) => {
    setItems((current) => {
      if (quantity <= 0) return current.filter((it) => it.lineId !== lineId)
      return current.map((it) =>
        it.lineId === lineId ? { ...it, quantity } : it,
      )
    })
  }, [])

  const removeItem = useCallback((lineId) => {
    setItems((current) => current.filter((it) => it.lineId !== lineId))
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const itemCount = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items],
  )

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.price * it.quantity, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      itemCount,
      subtotal,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      itemCount,
      subtotal,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return ctx
}
