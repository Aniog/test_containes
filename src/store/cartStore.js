import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  items: [],
  addItem: (item) => set((state) => {
    const existingItemIndex = state.items.findIndex(
      (i) => i.id === item.id && i.variant === item.variant
    );
    
    if (existingItemIndex > -1) {
      const newItems = [...state.items];
      newItems[existingItemIndex].quantity += item.quantity;
      return { items: newItems, isOpen: true };
    }
    
    return { items: [...state.items, item], isOpen: true };
  }),
  removeItem: (id, variant) => set((state) => ({
    items: state.items.filter((i) => !(i.id === id && i.variant === variant))
  })),
  updateQuantity: (id, variant, quantity) => set((state) => {
    if (quantity <= 0) {
      return { 
        items: state.items.filter((i) => !(i.id === id && i.variant === variant)) 
      };
    }
    return {
      items: state.items.map((i) => 
        i.id === id && i.variant === variant ? { ...i, quantity } : i
      )
    };
  }),
}));
