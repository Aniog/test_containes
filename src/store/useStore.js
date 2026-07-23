import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, quantity = 1, tone = 'Gold') => set((state) => {
    const existingItem = state.cart.find(
      (item) => item.id === product.id && item.tone === tone
    );
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
        isCartOpen: true
      };
    }
    return {
      cart: [...state.cart, { ...product, quantity, tone }],
      isCartOpen: true
    };
  }),
  removeFromCart: (productId, tone) => set((state) => ({
    cart: state.cart.filter((item) => !(item.id === productId && item.tone === tone))
  }),
  ),
  updateQuantity: (productId, tone, quantity) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === productId && item.tone === tone
        ? { ...item, quantity }
        : item
    )
  })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
}));