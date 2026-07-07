import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (item) => set((state) => {
    const existing = state.items.find((i) => i.product.id === item.product.id && i.variant === item.variant);
    if (existing) {
      return {
        items: state.items.map((i) => 
          i.product.id === item.product.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        ),
        isOpen: true
      };
    }
    return { items: [...state.items, item], isOpen: true };
  }),
  removeItem: (productId, variant) => set((state) => ({
    items: state.items.filter((i) => !(i.product.id === productId && i.variant === variant))
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => {
    if (quantity <= 0) {
      return { items: state.items.filter((i) => !(i.product.id === productId && i.variant === variant)) };
    }
    return {
      items: state.items.map((i) => 
        i.product.id === productId && i.variant === variant
          ? { ...i, quantity }
          : i
      )
    };
  })
}));
