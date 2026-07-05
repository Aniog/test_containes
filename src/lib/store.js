import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      addItem: (product) => set((state) => {
        const existingItem = state.items.find(
          (item) => item.id === product.id && item.variant === product.variant
        )
        
        if (existingItem) {
          return {
            items: state.items.map((item) =>
              item.id === product.id && item.variant === product.variant
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            ),
            isOpen: true
          }
        }
        
        return {
          items: [...state.items, { ...product, quantity: product.quantity || 1 }],
          isOpen: true
        }
      }),
      
      removeItem: (productId, variant) => set((state) => ({
        items: state.items.filter(
          (item) => !(item.id === productId && item.variant === variant)
        )
      })),
      
      updateQuantity: (productId, variant, quantity) => set((state) => ({
        items: quantity === 0 
          ? state.items.filter((item) => !(item.id === productId && item.variant === variant))
          : state.items.map((item) =>
              item.id === productId && item.variant === variant
                ? { ...item, quantity }
                : item
            )
      })),
      
      clearCart: () => set({ items: [] }),
      
      get cartTotal() {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      get itemCount() {
        return get().items.reduce((count, item) => count + item.quantity, 0)
      }
    }),
    {
      name: 'velmora-cart-storage',
    }
  )
)

export default useCartStore;