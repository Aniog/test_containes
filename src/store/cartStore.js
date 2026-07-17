import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  isOpen: false,
  items: [],
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (product, variant) => {
    const { items } = get();
    // Use price property explicitly to avoid undefined if product price is deeply nested
    const cartItemId = `${product.id}-${variant}`;
    const existingItem = items.find(item => item.cartItemId === cartItemId);
    
    if (existingItem) {
      set({
        items: items.map(item => 
          item.cartItemId === cartItemId 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isOpen: true
      });
    } else {
      set({
        items: [...items, { ...product, cartItemId, variant, quantity: 1 }],
        isOpen: true
      });
    }
  },
  
  removeItem: (cartItemId) => {
    const { items } = get();
    set({ items: items.filter(item => item.cartItemId !== cartItemId) });
  },
  
  updateQuantity: (cartItemId, quantity) => {
    const { items } = get();
    if (quantity <= 0) {
      set({ items: items.filter(item => item.cartItemId !== cartItemId) });
      return;
    }
    
    set({
      items: items.map(item => 
        item.cartItemId === cartItemId 
          ? { ...item, quantity }
          : item
      )
    });
  },
  
  cartTotal: () => {
    const { items } = get();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  cartCount: () => {
    const { items } = get();
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}));
