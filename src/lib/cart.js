import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id && i.variant === item.variant);
    if (existingItem) {
      return {
        items: state.items.map(i =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        ),
        isOpen: true
      };
    }
    return { items: [...state.items, item], isOpen: true };
  }),
  removeItem: (id, variant) => set((state) => ({
    items: state.items.filter(i => !(i.id === id && i.variant === variant))
  })),
  updateQuantity: (id, variant, quantity) => set((state) => ({
    items: quantity === 0 
      ? state.items.filter(i => !(i.id === id && i.variant === variant))
      : state.items.map(i => i.id === id && i.variant === variant ? { ...i, quantity } : i)
  })),
  cartTotal: () => {
    let total = 0;
    // this getter needs to access state somehow, let's omit the function inside the store 
    // and rely on a selector returning calculated total in the component.
    return total;
  }
}));
