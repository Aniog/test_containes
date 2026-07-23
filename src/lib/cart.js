import { create } from 'zustand'

export const useCart = create((set, get) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (product) => {
    const currentItems = get().items;
    const existingItem = currentItems.find(item => item.id === product.id && item.variant === product.variant);
    
    if (existingItem) {
      set({ 
        items: currentItems.map(item => 
          (item.id === product.id && item.variant === product.variant)
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        ),
        isOpen: true
      });
    } else {
      set({ items: [...currentItems, { ...product, quantity: product.quantity || 1 }], isOpen: true });
    }
  },
  removeItem: (id, variant) => {
    set({ items: get().items.filter(item => !(item.id === id && item.variant === variant)) });
  },
  updateQuantity: (id, variant, quantity) => {
    if (quantity < 1) {
      get().removeItem(id, variant);
      return;
    }
    set({ 
      items: get().items.map(item => 
        (item.id === id && item.variant === variant)
          ? { ...item, quantity }
          : item
      )
    });
  },
  cartTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
  cartCount: () => get().items.reduce((count, item) => count + item.quantity, 0),
}))
