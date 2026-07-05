import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (product, quantity = 1, tone = 'Gold') => {
    set((state) => {
      const existing = state.items.find(
        (i) => i.product.id === product.id && i.tone === tone
      );
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id && i.tone === tone
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
          isOpen: true
        };
      }
      return { 
        items: [...state.items, { product, quantity, tone }],
        isOpen: true
      };
    });
  },
  removeItem: (productId, tone) => {
    set((state) => ({
      items: state.items.filter((i) => !(i.product.id === productId && i.tone === tone))
    }));
  },
  updateQuantity: (productId, tone, quantity) => {
    set((state) => ({
      items: state.items.map((i) =>
        i.product.id === productId && i.tone === tone
          ? { ...i, quantity: Math.max(1, quantity) }
          : i
      )
    }));
  },
  cartTotal: () => {
    let total = 0;
    // can calculate dynamically in component or here, 
    // but easier to just use state inside the component 
    return total;
  }
}));