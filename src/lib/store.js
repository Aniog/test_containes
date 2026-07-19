import { create } from 'zustand'
import { toast } from 'sonner'

export const useCartStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, variant, quantity = 1) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id && item.variant === variant
      )
      
      toast.success('Added to cart', {
        description: `${quantity}x ${product.name} (${variant})`,
        duration: 3000,
      })

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id && item.variant === variant
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isCartOpen: true
        }
      }
      return { 
        cart: [...state.cart, { product, variant, quantity }],
        isCartOpen: true
      }
    }),
  removeFromCart: (productId, variant) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.product.id === productId && item.variant === variant)
      ),
    })),
  updateQuantity: (productId, variant, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      ),
    })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  closeCart: () => set({ isCartOpen: false }),
}))
