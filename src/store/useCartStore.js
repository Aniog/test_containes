import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id && i.variant === item.variant);
    if (existingItem) {
      return {
        items: state.items.map(i => 
          i.id === item.id && i.variant === item.variant 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        ),
        isOpen: true
      };
    }
    return { items: [...state.items, { ...item, quantity: 1 }], isOpen: true };
  }),
  removeItem: (itemId, variant) => set((state) => ({
    items: state.items.filter(i => !(i.id === itemId && i.variant === variant))
  })),
  updateQuantity: (itemId, variant, quantity) => set((state) => {
    if (quantity === 0) {
      return { items: state.items.filter(i => !(i.id === itemId && i.variant === variant)) };
    }
    return {
      items: state.items.map(i => 
        i.id === itemId && i.variant === variant 
          ? { ...i, quantity } 
          : i
      )
    };
  }),
  cartCount: () => get().items.reduce((total, item) => total + item.quantity, 0),
  cartTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));

export default useCartStore;
