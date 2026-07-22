import { create } from 'zustand'

export const useCart = create((set, get) => ({
  cart: [],
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  addToCart: (product, quantity = 1) => {
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id && item.variant === product.variant)
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.variant === product.variant
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isCartOpen: true
        }
      }
      return { cart: [...state.cart, { ...product, quantity }], isCartOpen: true }
    })
  },
  removeFromCart: (productId, variant) => {
    set((state) => ({
      cart: state.cart.filter((item) => !(item.id === productId && item.variant === variant))
    }))
  },
  updateQuantity: (productId, variant, quantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.variant === variant ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    }))
  },
  cartTotal: () => {
    return get().cart.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  cartCount: () => {
    return get().cart.reduce((count, item) => count + item.quantity, 0)
  }
}))
