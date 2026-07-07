import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { getProductById } from '@/data/products'

const STORAGE_KEY = 'velmora.cart.v1'

const CartContext = createContext(null)

function readStoredCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .map((entry) => {
        const product = getProductById(entry?.id)
        if (!product) return null
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images?.[0]?.id,
          category: product.category,
          variant: entry.variant || product.variants?.[0]?.id || 'gold',
          quantity: Math.max(1, Number(entry.quantity) || 1),
        }
      })
      .filter(Boolean)
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStoredCart())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage full or unavailable */
    }
  }, [items])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((v) => !v), [])

  const addItem = useCallback(
    ({ id, variant, quantity = 1 }) => {
      const product = getProductById(id)
      if (!product) return
      const safeVariant = variant || product.variants?.[0]?.id || 'gold'
      setItems((current) => {
        const existing = current.find(
          (entry) => entry.id === id && entry.variant === safeVariant,
        )
        if (existing) {
          return current.map((entry) =>
            entry.id === id && entry.variant === safeVariant
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry,
          )
        }
        return [
          ...current,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images?.[0]?.id,
            category: product.category,
            variant: safeVariant,
            quantity,
          },
        ]
      })
      setIsOpen(true)
    },
    [],
  )

  const removeItem = useCallback((id, variant) => {
    setItems((current) =>
      current.filter((entry) => !(entry.id === id && entry.variant === variant)),
    )
  }, [])

  const updateQuantity = useCallback((id, variant, quantity) => {
    setItems((current) =>
      current
        .map((entry) =>
          entry.id === id && entry.variant === variant
            ? { ...entry, quantity: Math.max(1, Number(quantity) || 1) }
            : entry,
        )
        .filter((entry) => entry.quantity > 0),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
    return {
      subtotal,
      itemCount,
      shipping: subtotal > 75 || subtotal === 0 ? 0 : 8,
      freeShippingThreshold: 75,
    }
  }, [items])

  const value = useMemo(
    () => ({
      items,
      totals,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clear,
    }),
    [items, totals, isOpen, openCart, closeCart, toggleCart, addItem, removeItem, updateQuantity, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return ctx
}
