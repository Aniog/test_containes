import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (item, quantity = 1, tone = 'Gold') =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.tone === tone
      );
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id && i.tone === tone
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
          isOpen: true,
        };
      }
      return {
        items: [...state.items, { ...item, quantity, tone }],
        isOpen: true,
      };
    }),
  removeItem: (itemId, tone) =>
    set((state) => ({
      items: state.items.filter((i) => !(i.id === itemId && i.tone === tone)),
    })),
  updateQuantity: (itemId, tone, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return {
          items: state.items.filter((i) => !(i.id === itemId && i.tone === tone)),
        };
      }
      return {
        items: state.items.map((i) =>
          i.id === itemId && i.tone === tone ? { ...i, quantity } : i
        ),
      };
    }),
  clearCart: () => set({ items: [] }),
  getCartTotal: () => {
    return useCartStore.getState().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
  getCartCount: () => {
    return useCartStore.getState().items.reduce(
      (count, item) => count + item.quantity,
      0
    );
  },
}));