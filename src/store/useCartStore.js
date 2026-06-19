import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (item) => {
    const { items } = get();
    const existingItem = items.find((i) => i.id === item.id && i.variant === item.variant);
    
    if (existingItem) {
      set({
        items: items.map((i) => 
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      });
    } else {
      set({ items: [...items, item] });
    }
  },
  
  removeItem: (id, variant) => set((state) => ({
    items: state.items.filter((i) => !(i.id === id && i.variant === variant))
  })),
  
  updateQuantity: (id, variant, quantity) => set((state) => ({
    items: quantity === 0 
      ? state.items.filter((i) => !(i.id === id && i.variant === variant))
      : state.items.map((i) => 
          i.id === id && i.variant === variant
            ? { ...i, quantity }
            : i
        )
  })),
  
  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  },
  
  get subtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
}));