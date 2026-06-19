import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, quantity = 1, variant = null) => set((state) => {
    const existingItem = state.cart.find(
      item => item.id === product.id && item.variant === variant
    );
    
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
      cart: [...state.cart, { ...product, quantity, variant }],
      isCartOpen: true
    };
  }),
  removeFromCart: (productId, variant = null) => set((state) => ({
    cart: state.cart.filter(item => !(item.id === productId && item.variant === variant))
  })),
  updateQuantity: (productId, quantity, variant = null) => set((state) => ({
    cart: state.cart.map(item => 
      item.id === productId && item.variant === variant
        ? { ...item, quantity }
        : item
    )
  })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  closeCart: () => set({ isCartOpen: false })
}));
