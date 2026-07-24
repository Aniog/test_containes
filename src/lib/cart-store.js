import { create } from 'zustand';
import { toast } from 'sonner';

export const useCartStore = create((set) => ({
  items: [],
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
  addItem: (product, variant) => set((state) => {
    const existingItem = state.items.find(
      (item) => item.id === product.id && item.variant === variant
    );
    
    toast.success(`${product.data?.name || product.name} added to cart`, {
      description: `Variant: ${variant}`,
    });

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
  updateQuantity: (id, variant, quantity) => set((state) => ({
    items: state.items.map((item) =>
      item.id === id && item.variant === variant ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0),
  })),
  clearCart: () => set({ items: [] }),
  getTotal: () => {
    // This will be called from outside usually, or we can use a selector
  }
}));
