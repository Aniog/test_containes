import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (product, quantity = 1, variant = null) => set((state) => {
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
  }),
  
  removeItem: (productId, variant = null) => set((state) => ({
    items: state.items.filter((item) => !(item.id === productId && item.variant === variant))
  })),
  
  updateQuantity: (productId, variant = null, change) => set((state) => {
    const newItems = state.items.map((item) => {
      if (item.id === productId && item.variant === variant) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    return { items: newItems };
  }),
  
  cartCount: () => get().items.reduce((count, item) => count + item.quantity, 0),
  cartTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));
