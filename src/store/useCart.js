import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),
      
      addItem: (product, quantity = 1, color = 'gold') => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.id === product.id && item.selectedColor === color
          );

          if (existingItemIndex > -1) {
            const newItems = [...state.items];
            newItems[existingItemIndex].quantity += quantity;
            return { items: newItems, isOpen: true }; // open cart when adding
          }

          return {
            items: [...state.items, { ...product, quantity, selectedColor: color }],
            isOpen: true
          };
        });
      },
      
      removeItem: (productId, color) => {
        set((state) => ({
          items: state.items.filter(
            (item) => !(item.id === productId && item.selectedColor === color)
          ),
        }));
      },
      
      updateQuantity: (productId, color, quantity) => {
        if (quantity < 1) return;
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId && item.selectedColor === color
              ? { ...item, quantity }
              : item
          ),
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      get cartTotal() {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      
      get itemCount() {
         return get().items.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'velmora-cart',
    }
  )
);
