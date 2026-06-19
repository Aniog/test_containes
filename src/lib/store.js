import { create } from 'zustand';

export const useCart = create((set) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (product, variant = 'Gold') => set((state) => {
    const existingItem = state.items.find(
      (item) => item.id === product.id && item.variant === variant
    );
    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isOpen: true,
      };
    }
    return {
      items: [...state.items, { ...product, variant, quantity: 1 }],
      isOpen: true,
    };
  }),
  removeItem: (productId, variant) => set((state) => ({
    items: state.items.filter((item) => !(item.id === productId && item.variant === variant)),
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    items: state.items.map((item) =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    ),
  })),
  getTotal: () => {
    const state = useCart.getState();
    return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));
