import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (product, variant, quantity = 1) => {
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.variant === variant
      );
      
      if (existingItemIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += quantity;
        return { items: newItems, isOpen: true };
      }
      
      return { 
        items: [...state.items, { product, variant, quantity }],
        isOpen: true
      };
    });
  },
  
  removeItem: (productId, variant) => {
    set((state) => ({
      items: state.items.filter(item => !(item.product.id === productId && item.variant === variant))
    }));
  },
  
  updateQuantity: (productId, variant, newQuantity) => {
    if (newQuantity < 1) return;
    
    set((state) => ({
      items: state.items.map(item => 
        item.product.id === productId && item.variant === variant
          ? { ...item, quantity: newQuantity }
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

export default useCartStore;