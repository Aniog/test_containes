import { createContext, useContext, useState, useCallback, useMemo } from "react"

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((product, options = {}) => {
    const { tone = product.tone[0], quantity = 1 } = options
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === product.id && i.tone === tone,
      )
      if (existing) {
        return prev.map((i) =>
          i.id === product.id && i.tone === tone
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          tone,
          quantity,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id, tone) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)))
  }, [])

  const updateQuantity = useCallback((id, tone, quantity) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => !(i.id === id && i.tone === tone)))
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.id === id && i.tone === tone ? { ...i, quantity } : i,
      ),
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    return { subtotal, count }
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        ...totals,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
