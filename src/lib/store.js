import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (item) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id && i.variant === item.variant);
    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        ),
        isOpen: true,
      };
    }
    return {
      items: [...state.items, { ...item, quantity: item.quantity || 1 }],
      isOpen: true,
    };
  }),
  
  removeItem: (id, variant) => set((state) => ({
    items: state.items.filter((i) => !(i.id === id && i.variant === variant)),
  })),
  
  updateQuantity: (id, variant, quantity) => set((state) => ({
    items: quantity === 0 
      ? state.items.filter((i) => !(i.id === id && i.variant === variant))
      : state.items.map((i) => (i.id === id && i.variant === variant) ? { ...i, quantity } : i),
  })),
  
  getCartTotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getCartCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));
