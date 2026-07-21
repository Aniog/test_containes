import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id && item.variant === product.variant);
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id && item.variant === product.variant
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      };
    }
    return { items: [...state.items, product] };
  }),
  removeItem: (productId, variant) => set((state) => ({
    items: state.items.filter(item => !(item.id === productId && item.variant === variant))
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  })),
  cartTotal: () => set((state) => ({
    total: state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }))
}));