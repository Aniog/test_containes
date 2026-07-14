import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, variant, quantity) => set((state) => {
    const existingItem = state.cart.find(item => item.id === product.id && item.variant === variant);
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
        isCartOpen: true
      };
    }
    return {
      cart: [...state.cart, { ...product, variant, quantity }],
      isCartOpen: true
    };
  }),
  removeFromCart: (productId, variant) => set((state) => ({
    cart: state.cart.filter(item => !(item.id === productId && item.variant === variant))
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === productId && item.variant === variant
        ? { ...item, quantity }
        : item
    )
  })),
  setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
}));
