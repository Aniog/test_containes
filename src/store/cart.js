import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (product, variant = 'Gold', quantity = 1) => {
    const { items } = get();
    const existingIndex = items.findIndex(
      (item) => item.id === product.id && item.variant === variant
    );

    if (existingIndex >= 0) {
      const updated = [...items];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + quantity,
      };
      set({ items: updated, isOpen: true });
    } else {
      set({
        items: [
          ...items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            variant,
            quantity,
            imgId: product.imgId,
            slug: product.slug,
          },
        ],
        isOpen: true,
      });
    }
  },

  removeItem: (id, variant) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === id && item.variant === variant)
      ),
    }));
  },

  updateQuantity: (id, variant, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, variant);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      ),
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotal: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getItemCount: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.quantity, 0);
  },
}));
