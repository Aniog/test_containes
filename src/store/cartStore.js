import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (product, quantity = 1, variant = null) => {
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === product.id && item.variant === variant
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
        return { items: newItems, isOpen: true };
      }

      return {
        items: [...state.items, { ...product, quantity, variant }],
        isOpen: true
      };
    });
  },
  
  removeItem: (productId, variant = null) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === productId && item.variant === variant)
      )
    }));
  },
  
  updateQuantity: (productId, variant, quantity) => {
    if (quantity < 1) {
      get().removeItem(productId, variant);
      return;
    }
    
    set((state) => ({
      items: state.items.map((item) => 
        item.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    }));
  },
  
  cartTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
  
  itemCount: () => get().items.reduce((count, item) => count + item.quantity, 0)
}));
