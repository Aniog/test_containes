import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (product, quantity = 1) => set((state) => {
    const existingItem = state.items.find((item) => item.product.id === product.id);
    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
        isOpen: true,
      };
    }
    return { items: [...state.items, { product, quantity }], isOpen: true };
  }),
  
  removeItem: (productId) => set((state) => ({
    items: state.items.filter((item) => item.product.id !== productId)
  })),
  
  updateQuantity: (productId, quantity) => set((state) => ({
    items: quantity === 0 
      ? state.items.filter((item) => item.product.id !== productId)
      : state.items.map((item) => 
          item.product.id === productId ? { ...item, quantity } : item
        )
  })),
  
  clearCart: () => set({ items: [] })
}));