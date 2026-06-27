import { create } from 'zustand'

export const useCartStore = create((set) => ({
  items: [],
  isOpen: false,
  
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  
  addItem: (product, variant) => set((state) => {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === product.id && item.variant === variant
    )
    
    if (existingItemIndex > -1) {
      const newItems = [...state.items]
      newItems[existingItemIndex].quantity += 1
      return { items: newItems, isOpen: true }
    }
    
    return { 
      items: [...state.items, { ...product, variant, quantity: 1 }],
      isOpen: true 
    }
  }),
  
  removeItem: (id, variant) => set((state) => ({
    items: state.items.filter((item) => !(item.id === id && item.variant === variant))
  })),
  
  updateQuantity: (id, variant, quantity) => set((state) => ({
    items: state.items.map((item) => 
      item.id === id && item.variant === variant 
        ? { ...item, quantity: Math.max(0, quantity) }
        : item
    ).filter(item => item.quantity > 0)
  })),
  
  clearCart: () => set({ items: [] }),
  
  getTotal: () => {
    return useCartStore.getState().items.reduce((total, item) => total + (item.data?.price || 0) * item.quantity, 0)
  }
}))
