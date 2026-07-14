import { create } from 'zustand';

export const useCartStore = create((set) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (product, variant) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id && item.variant === variant);
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isOpen: true
      };
    }
    return { 
      items: [...state.items, { ...product, variant, quantity: 1 }],
      isOpen: true
    };
  }),
  removeItem: (productId, variant) => set((state) => ({
    items: state.items.filter(item => !(item.id === productId && item.variant === variant))
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  })),
  clearCart: () => set({ items: [] }),
  getTotal: () => {
    const state = useCartStore.getState();
    return state.items.reduce((total, item) => total + (item.data.price * item.quantity), 0);
  }
}));
