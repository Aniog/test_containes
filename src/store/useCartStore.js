import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (product) => {
    set((state) => {
      const existing = state.items.find(
        (item) => item.id === product.id && item.variant === product.variant
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id && item.variant === product.variant
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
          isOpen: true,
        };
      }
      return { items: [...state.items, product], isOpen: true };
    });
  },
  
  removeItem: (id, variant) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === id && item.variant === variant)
      ),
    }));
  },
  
  updateQuantity: (id, variant, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      ),
    }));
  },
  
  get totalItems() {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  get subtotal() {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));
