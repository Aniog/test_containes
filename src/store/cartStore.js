import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  
  setIsOpen: (isOpen) => set({ isOpen }),
  
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id);
    if (existingItem) {
      return {
        items: state.items.map(i => 
          i.id === item.id 
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        ),
        isOpen: true
      };
    }
    return { 
      items: [...state.items, { ...item, quantity: item.quantity || 1 }],
      isOpen: true
    };
  }),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.id === id ? { ...item, quantity } : item
    )
  })),
  
  cartTotal: () => set((state) => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  })
}));
