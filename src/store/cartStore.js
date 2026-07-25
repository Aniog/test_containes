import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      
      addItem: (product, variant = null, quantity = 1) => {
        set((state) => {
          const itemKey = variant ? `${product.id}-${variant}` : product.id;
          const existingItem = state.items.find(i => i.key === itemKey);
          
          if (existingItem) {
            return {
              items: state.items.map(i => 
                i.key === itemKey 
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
              isOpen: true
            };
          }
          
          return {
            items: [...state.items, { ...product, variant, quantity, key: itemKey }],
            isOpen: true
          };
        });
      },
      
      removeItem: (itemKey) => {
        set((state) => ({
          items: state.items.filter(i => i.key !== itemKey)
        }));
      },
      
      updateQuantity: (itemKey, quantity) => {
        set((state) => ({
          items: state.items.map(i => 
            i.key === itemKey 
              ? { ...i, quantity: Math.max(1, quantity) }
              : i
          )
        }));
      },
      
      cartTotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      cartCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'velmora-cart',
    }
  )
);
