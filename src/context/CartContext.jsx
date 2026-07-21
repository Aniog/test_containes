import { createContext, useContext, useState, useEffect } from 'react'
import { products } from '../data/products'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('velmora-cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Failed to parse cart:', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('velmora-cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = async (productId, quantity = 1, variant = 'Gold') => {
    setIsLoading(true)
    
    // Simulate API delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const product = products.find(p => p.id === productId)
    if (!product) return

    setCart(prev => {
      const existingItem = prev.find(
        item => item.productId === productId && item.variant === variant
      )

      if (existingItem) {
        return prev.map(item =>
          item.productId === productId && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prev, {
        productId,
        quantity,
        variant,
        product,
      }]
    })

    setIsCartOpen(true)
    setIsLoading(false)
  }

  const updateQuantity = (productId, variant, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, variant)
      return
    }

    setCart(prev =>
      prev.map(item =>
        item.productId === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    )
  }

  const removeFromCart = (productId, variant) => {
    setCart(prev =>
      prev.filter(item =>
        !(item.productId === productId && item.variant === variant)
      )
    )
  }

  const clearCart = () => setCart([])

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        isCartOpen,
        isLoading,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
