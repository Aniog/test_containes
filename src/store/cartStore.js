import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product, variant, quantity = 1) => {
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.productId === product.id && item.variant === variant
      );

      if (existingIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + quantity,
        };
        return { items: updatedItems };
      }

      return {
        items: [
          ...state.items,
          {
            id: `${product.id}-${variant}-${Date.now()}`,
            productId: product.id,
            name: product.name,
            price: product.price,
            variant,
            quantity,
            image: product.images?.[0],
          },
        ],
      };
    });
  },

  removeItem: (itemId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    }));
  },

  updateQuantity: (itemId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(itemId);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      ),
    }));
  },

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  getTotal: () => {
    const state = get();
    return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getItemCount: () => {
    const state = get();
    return state.items.reduce((sum, item) => sum + item.quantity, 0);
  },

  clearCart: () => set({ items: [] }),
}));
