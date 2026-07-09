import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '@/data/products'

const CartContext = createContext(null)
const findProduct = (productId) => products.find((product) => product.id === productId)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product, quantity = 1, variant = 'Gold') => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id && item.variant === variant)

      if (existing) {
        return current.map((item) =>
          item.productId === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { productId: product.id, quantity, variant }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId, variant) => {
    setItems((current) => current.filter((item) => !(item.productId === productId && item.variant === variant)))
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, variant)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.productId === productId && item.variant === variant ? { ...item, quantity } : item,
      ),
    )
  }

  const enrichedItems = useMemo(
    () => items.map((item) => ({ ...item, product: findProduct(item.productId) })).filter((item) => item.product),
    [items],
  )

  const cartCount = enrichedItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = enrichedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items: enrichedItems, cartCount, subtotal, isCartOpen, setIsCartOpen, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
