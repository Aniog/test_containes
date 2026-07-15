import { create } from 'zustand';
import { toast } from 'sonner';

export const useStore = create((set) => ({
  cart: [],
  cartOpen: false,
  
  addToCart: (product, quantity = 1, tone = 'Gold') => set((state) => {
    const existingItem = state.cart.find(
      item => item.id === product.id && item.tone === tone
    );
    
    toast.success(`Added ${product.name} to bag`);
    
    if (existingItem) {
      return {
        cart: state.cart.map(item => 
          item.id === product.id && item.tone === tone 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
        cartOpen: true
      };
    }
    
    return {
      cart: [...state.cart, { ...product, quantity, tone }],
      cartOpen: true
    };
  }),
  
  removeFromCart: (productId, tone) => set((state) => ({
    cart: state.cart.filter(item => !(item.id === productId && item.tone === tone))
  })),
  
  updateQuantity: (productId, tone, quantity) => set((state) => ({
    cart: state.cart.map(item => 
      item.id === productId && item.tone === tone
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  })),
  
  setCartOpen: (isOpen) => set({ cartOpen: isOpen }),
  
  cartTotal: () => {
    return 0; // Will be implemented as a selector in components
  }
}));
