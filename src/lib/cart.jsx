import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProductById } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart-v1'

const readStoredCart = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed.filter((i) => i && i.productId) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() =>
    typeof window === 'undefined' ? [] : readStoredCart()
  )
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // storage unavailable — cart still works in-memory
    }
  }, [items])

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(null), 2600)
    return () => window.clearTimeout(timer)
  }, [toast])

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen])

  const addItem = useCallback((productId, variant = 'Gold', quantity = 1) => {
    const product = getProductById(productId)
    if (!product) return
    setItems((current) => {
      const key = `${productId}::${variant}`
      const existing = current.find((i) => i.key === key)
      if (existing) {
        return current.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [...current, { key, productId, variant, quantity }]
    })
    setToast(`${product.name} added to your cart`)
  }, [])

  const removeItem = useCallback((key) => {
    setItems((current) => current.filter((i) => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((i) => i.key !== key)
        : current.map((i) => (i.key === key ? { ...i, quantity } : i))
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const detailed = items
      .map((item) => ({ ...item, product: getProductById(item.productId) }))
      .filter((item) => item.product)
    const count = detailed.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = detailed.reduce(
      (sum, i) => sum + i.quantity * i.product.price,
      0
    )
    return {
      items: detailed,
      count,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      toast,
      dismissToast: () => setToast(null),
    }
  }, [items, isCartOpen, toast, addItem, removeItem, updateQuantity, clearCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
