import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (item) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id && i.tone === item.tone);
    if (existingItem) {
      return {
        items: state.items.map((i) => 
          i.id === item.id && i.tone === item.tone
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        ),
        isOpen: true,
      };
    }
    return { 
      items: [...state.items, item],
      isOpen: true,
    };
  }),
  
  removeItem: (id, tone) => set((state) => ({
    items: state.items.filter((i) => !(i.id === id && i.tone === tone))
  })),
  
  updateQuantity: (id, tone, quantity) => set((state) => ({
    items: state.items.map((i) => 
      i.id === id && i.tone === tone
        ? { ...i, quantity: Math.max(1, quantity) }
        : i
    )
  })),

  getCartTotal: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));
