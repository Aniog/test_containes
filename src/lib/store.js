import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (product, variant) => set((state) => {
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
  
  removeItem: (id, variant) => set((state) => ({
    items: state.items.filter((item) => !(item.id === id && item.variant === variant)),
  })),

  updateQuantity: (id, variant, quantity) => set((state) => {
    if (quantity < 1) return state; // Don't allow less than 1
    
    return {
      items: state.items.map((item) => 
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    };
  }),
  
  getCartTotal: () => {
    const items = get().items;
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  getCartCount: () => {
    const items = get().items;
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}))