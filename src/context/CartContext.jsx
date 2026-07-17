import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct } from '@/data/products'

const CartContext = createContext(null)
const STORAGE_KEY = 'velmora-cart-v1'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((i) => getProduct(i.productId)) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage unavailable */
    }
  }, [items])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2600)
    return () => clearTimeout(t)
  }, [toast])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const addItem = useCallback((productId, variant = 'Gold', qty = 1) => {
    setItems((current) => {
      const existing = current.find((i) => i.productId === productId && i.variant === variant)
      if (existing) {
        return current.map((i) =>
          i.productId === productId && i.variant === variant
            ? { ...i, qty: Math.min(i.qty + qty, 99) }
            : i,
        )
      }
      return [...current, { productId, variant, qty }]
    })
    const product = getProduct(productId)
    setToast(product ? `${product.name} added to your cart` : 'Added to your cart')
  }, [])

  const removeItem = useCallback((productId, variant) => {
    setItems((current) => current.filter((i) => !(i.productId === productId && i.variant === variant)))
  }, [])

  const updateQty = useCallback(
    (productId, variant, qty) => {
      if (qty <= 0) {
        removeItem(productId, variant)
        return
      }
      setItems((current) =>
        current.map((i) => (i.productId === productId && i.variant === variant ? { ...i, qty } : i)),
      )
    },
    [removeItem],
  )

  const clearCart = useCallback(() => setItems([]), [])
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => {
    const detailed = items.map((i) => ({ ...i, product: getProduct(i.productId) }))
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = detailed.reduce((sum, i) => sum + i.product.price * i.qty, 0)
    return {
      items: detailed,
      count,
      subtotal,
      isOpen,
      openCart,
      closeCart,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      toast,
    }
  }, [items, isOpen, toast, openCart, closeCart, addItem, removeItem, updateQty, clearCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
