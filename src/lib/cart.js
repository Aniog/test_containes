import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (product, variant, quantity = 1) => {
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.variant === variant
      );
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id && item.variant === variant
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
          isOpen: true,
        };
      }
      
      return {
        items: [...state.items, { ...product, variant, quantity }],
        isOpen: true,
      };
    });
  },
  
  removeItem: (productId, variant) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === productId && item.variant === variant)
      ),
    }));
  },
  
  updateQuantity: (productId, variant, quantity) => {
    if (quantity < 1) return;
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      ),
    }));
  },
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  clearCart: () => set({ items: [] }),
  
  get totalItems() {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  get totalPrice() {
    return get().items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },
}));