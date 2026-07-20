import { create } from 'zustand';
import { getProductImageUrl } from '../lib/imageUtils';

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  isAnimating: false,

  // Open/close cart drawer
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  // Add item to cart
  addItem: (product, variant = 'Gold', quantity = 1) => {
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
          isAnimating: true,
        };
      }

      // Get the actual image URL from strk-img-config
      const imageUrl = getProductImageUrl(product.id);

      return {
        items: [
          ...state.items,
          {
            id: product.id,
            name: product.name,
            subtitle: product.subtitle,
            price: product.price,
            variant,
            quantity,
            image: imageUrl,
          },
        ],
        isOpen: true,
        isAnimating: true,
      };
    });

    // Reset animation state
    setTimeout(() => set({ isAnimating: false }), 300);
  },

  // Remove item from cart
  removeItem: (id, variant) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === id && item.variant === variant)
      ),
    }));
  },

  // Update item quantity
  updateQuantity: (id, variant, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id, variant);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      ),
    }));
  },

  // Clear cart
  clearCart: () => set({ items: [] }),

  // Get cart totals
  getCartTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getCartCount: () => {
    const { items } = get();
    return items.reduce((count, item) => count + item.quantity, 0);
  },
}));

export default useCartStore;
