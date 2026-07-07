import * as React from "react"

const CartContext = React.createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = React.useState(() => {
    try {
      const raw = localStorage.getItem("velmora-cart")
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    localStorage.setItem("velmora-cart", JSON.stringify(items))
  }, [items])

  const openCart = React.useCallback(() => setIsOpen(true), [])
  const closeCart = React.useCallback(() => setIsOpen(false), [])
  const toggleCart = React.useCallback(() => setIsOpen((s) => !s), [])

  const addItem = React.useCallback((product, variant, quantity = 1) => {
    setItems((current) => {
      const existing = current.find(
        (i) => i.productId === product.id && i.variant === variant
      )
      if (existing) {
        return current.map((i) =>
          i.productId === product.id && i.variant === variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [
        ...current,
        {
          lineItemId: `${product.id}-${variant}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          price: product.price,
          variant,
          quantity,
          imageId: product.imageId,
          titleId: product.titleId,
          descId: product.descId,
        },
      ]
    })
    setIsOpen(true)
  }, [])

  const removeItem = React.useCallback((lineItemId) => {
    setItems((current) => current.filter((i) => i.lineItemId !== lineItemId))
  }, [])

  const updateQuantity = React.useCallback((lineItemId, quantity) => {
    if (quantity < 1) {
      setItems((current) => current.filter((i) => i.lineItemId !== lineItemId))
      return
    }
    setItems((current) =>
      current.map((i) => (i.lineItemId === lineItemId ? { ...i, quantity } : i))
    )
  }, [])

  const clearCart = React.useCallback(() => setItems([]), [])

  const itemCount = React.useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  )
  const subtotal = React.useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  )

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = React.useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
