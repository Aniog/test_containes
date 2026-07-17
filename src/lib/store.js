import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, variant = 'Gold', quantity = 1) => set((state) => {
    const existingIndex = state.cart.findIndex(
      (item) => item.product.id === product.id && item.variant === variant
    );
    if (existingIndex >= 0) {
      const newCart = [...state.cart];
      newCart[existingIndex].quantity += quantity;
      return { cart: newCart, isCartOpen: true };
    }
    return { cart: [...state.cart, { product, variant, quantity }], isCartOpen: true };
  }),
  removeFromCart: (productId, variant) => set((state) => ({
    cart: state.cart.filter((item) => !(item.product.id === productId && item.variant === variant))
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    cart: state.cart.map((item) => {
      if (item.product.id === productId && item.variant === variant) {
        return { ...item, quantity: Math.max(1, quantity) };
      }
      return item;
    })
  })),
  setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
}));
