import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (product, variant = "gold", quantity = 1) => {
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.variant === variant
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
        return { items: newItems, isOpen: true };
      }

      return {
        items: [...state.items, { product, variant, quantity }],
        isOpen: true,
      };
    });
  },
  
  removeItem: (productId, variant) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.product.id === productId && item.variant === variant)
      )
    }));
  },
  
  updateQuantity: (productId, variant, quantity) => {
    if (quantity < 1) return;
    set((state) => ({
      items: state.items.map((item) => 
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    }));
  },

  cartTotal: () => {
    return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  },
  
  itemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  }
}));