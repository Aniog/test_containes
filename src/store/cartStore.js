import { create } from 'zustand'

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  addItem: (product, variant) => set((state) => {
    const existingItem = state.items.find(
      item => item.product.id === product.id && item.variant === variant
    );
    
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.product.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isOpen: true
      };
    }
    
    return {
      items: [...state.items, { product, variant, quantity: 1 }],
      isOpen: true
    };
  }),
  
  removeItem: (productId, variant) => set((state) => ({
    items: state.items.filter(item => !(item.product.id === productId && item.variant === variant))
  })),
  
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.product.id === productId && item.variant === variant
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  })),
  
  clearCart: () => set({ items: [] })
}))
