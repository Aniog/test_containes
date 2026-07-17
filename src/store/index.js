import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,
      
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      
      addToCart: (product, variant = null, quantity = 1) => {
        set((state) => {
          // Keep it simple for now, match by product ID and variant
          const existingItemIndex = state.cart.findIndex(
            (item) => item.product.id === product.id && item.variant === variant
          )
          
          if (existingItemIndex >= 0) {
            const newCart = [...state.cart]
            newCart[existingItemIndex].quantity += quantity
            return { cart: newCart, isCartOpen: true } // auto open on add
          }
          
          return { 
            cart: [...state.cart, { product, variant, quantity, id: Date.now().toString() }],
            isCartOpen: true // auto open on add
          }
        })
      },
      
      removeFromCart: (itemId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== itemId)
        }))
      },
      
      updateQuantity: (itemId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) => 
            item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
          )
        }))
      },
      
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)
      },
      
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0)
      }
    }),
    {
      name: 'velmora-storage',
    }
  )
)