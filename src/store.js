import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, quantity = 1, variant = 'Gold') => set((state) => {
    const existing = state.cart.find(
      (item) => item.id === product.id && item.variant === variant
    );
    if (existing) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
        isCartOpen: true,
      };
    }
    return {
      cart: [...state.cart, { ...product, quantity, variant }],
      isCartOpen: true,
    };
  }),
  removeFromCart: (productId, variant) => set((state) => ({
    cart: state.cart.filter((item) => !(item.id === productId && item.variant === variant)),
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    ),
  })),
  setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
}));
