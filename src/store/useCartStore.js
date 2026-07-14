import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id && i.variant === item.variant);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id && i.variant === item.variant
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, item], isOpen: true };
    }),
  removeItem: (id, variant) =>
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.variant === variant)),
    })),
  updateQuantity: (id, variant, quantity) =>
    set((state) => {
      if (quantity <= 0) {
         return {
          items: state.items.filter((i) => !(i.id === id && i.variant === variant)),
        };
      }
      return {
        items: state.items.map((i) =>
          i.id === id && i.variant === variant ? { ...i, quantity } : i
        ),
      };
    }),
  get totalItems() {
     return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },
  get subtotal() {
     return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}));
