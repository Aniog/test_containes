import { create } from 'zustand';

export const useAppStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (product, quantity = 1, variant = 'Gold') => set((state) => {
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
  removeFromCart: (productId, variant) => set((state) => ({
    cart: state.cart.filter(item => !(item.id === productId && item.variant === variant))
  })),
  updateQuantity: (productId, variant, quantity) => set((state) => ({
    cart: quantity === 0 
      ? state.cart.filter(item => !(item.id === productId && item.variant === variant))
      : state.cart.map(item => 
          item.id === productId && item.variant === variant
            ? { ...item, quantity }
            : item
        )
  })),
  setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  cartTotal: () => set((state) => ({
    total: state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  })),
}));