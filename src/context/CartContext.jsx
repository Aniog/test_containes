import { createContext, useContext, useMemo, useState, useCallback } from "react"
import { getProduct } from "@/data/products"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((productId, variant = "Gold", qty = 1) => {
    const product = getProduct(productId)
    if (!product) return
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId && i.variant === variant)
      if (existing) {
        return prev.map((i) =>
          i.productId === productId && i.variant === variant ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { productId, variant, qty }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((productId, variant) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.variant === variant)))
  }, [])

  const updateQty = useCallback((productId, variant, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.productId === productId && i.variant === variant))
        : prev.map((i) => (i.productId === productId && i.variant === variant ? { ...i, qty } : i))
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const detailed = items
      .map((i) => ({ ...i, product: getProduct(i.productId) }))
      .filter((i) => i.product)
    const count = detailed.reduce((sum, i) => sum + i.qty, 0)
    const subtotal = detailed.reduce((sum, i) => sum + i.qty * i.product.price, 0)
    return { items: detailed, count, subtotal, isOpen, setIsOpen, addItem, removeItem, updateQty, clearCart }
  }, [items, isOpen, addItem, removeItem, updateQty, clearCart])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
