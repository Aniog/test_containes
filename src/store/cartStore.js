import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id && item.variant === product.variant);
        
        if (existingItem) {
          return {
            items: state.items.map(item => 
              (item.id === product.id && item.variant === product.variant)
                ? { ...item, quantity: item.quantity + product.quantity }
                : item
            )
          };
        }
        
        return { items: [...state.items, product] };
      }),
      
      removeItem: (id, variant) => set((state) => ({
        items: state.items.filter(item => !(item.id === id && item.variant === variant))
      })),
      
      updateQuantity: (id, variant, quantity) => set((state) => ({
        items: state.items.map(item => 
          (item.id === id && item.variant === variant)
            ? { ...item, quantity }
            : item
        )
      })),
      
      clearCart: () => set({ items: [] }),
      
      getTotalPrice: () => {
        const state = get();
        return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }),
    {
      name: 'velmora-cart-storage',
    }
  )
);

export default useCartStore;