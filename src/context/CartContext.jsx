import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

const STORAGE_KEY = "velmora_cart_v1"

const CartContext = createContext(null)

function readInitial() {
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

function lineKey(productId, color) {
  return `${productId}::${color || "default"}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readInitial)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore quota errors */
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback((product, options = {}) => {
    const color = options.color || product?.colors?.[0]?.value || "default"
    const quantity = Math.max(1, Number(options.quantity) || 1)
    const key = lineKey(product.id, color)
    setItems((current) => {
      const existing = current.find((entry) => entry.key === key)
      if (existing) {
        return current.map((entry) =>
          entry.key === key
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry,
        )
      }
      return [
        ...current,
        {
          key,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.images?.[0] || null,
          color,
          colorLabel:
            product.colors?.find((c) => c.value === color)?.name || color,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((entry) => entry.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    const next = Math.max(1, Number(quantity) || 1)
    setItems((current) =>
      current.map((entry) =>
        entry.key === key ? { ...entry, quantity: next } : entry,
      ),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const count = items.reduce((acc, entry) => acc + entry.quantity, 0)
    const subtotal = items.reduce(
      (acc, entry) => acc + entry.price * entry.quantity,
      0,
    )
    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clear,
    }
  }, [
    items,
    isOpen,
    openCart,
    closeCart,
    toggleCart,
    addItem,
    removeItem,
    updateQuantity,
    clear,
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

export { lineKey }
