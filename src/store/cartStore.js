import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (product, variant, quantity = 1) => {
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingIndex > -1) {
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
            id: product.id,
            name: product.name,
            price: product.price,
            variant,
            quantity,
            image: product.images[0],
          },
        ],
      };
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
    if (quantity <= 0) {
      get().removeItem(id, variant);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.variant === variant ? { ...item, quantity } : item
      ),
    }));
  },

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set({ isOpen: false }),
  openCart: () => set({ isOpen: true }),

  getTotalItems: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  clearCart: () => set({ items: [] }),
}));
