import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,
      
      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      
      addToCart: (product, quantity = 1, variant = 'gold') => set((state) => {
        const existingItem = state.cart.find(
          item => item.product.id === product.id && item.variant === variant
        );
        
        if (existingItem) {
          return {
            cart: state.cart.map(item => 
              item.product.id === product.id && item.variant === variant
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
            isCartOpen: true
          };
        }
        
        return {
          cart: [...state.cart, { product, quantity, variant }],
          isCartOpen: true
        };
      }),
      
      removeFromCart: (productId, variant) => set((state) => ({
        cart: state.cart.filter(
          item => !(item.product.id === productId && item.variant === variant)
        )
      })),
      
      updateQuantity: (productId, variant, quantity) => set((state) => ({
        cart: state.cart.map(item => 
          item.product.id === productId && item.variant === variant
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
      })),
      
      clearCart: () => set({ cart: [] }),
      
      getCartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      
      getCartCount: () => {
        const { cart } = get();
        return cart.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'velmora-storage',
      partialize: (state) => ({ cart: state.cart }) // Only persist cart data, not UI state
    }
  )
);
