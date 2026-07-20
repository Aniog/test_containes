import { create } from 'zustand'

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (item) => set((state) => {
    const existingItem = state.items.find(i => i.id === item.id)
    if (existingItem) {
      return {
        items: state.items.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
        ),
        isOpen: true
      }
    }
    return { items: [...state.items, { ...item, quantity: item.quantity || 1 }], isOpen: true }
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(i => i.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: state.items.map(i =>
      i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i
    ).filter(i => i.quantity > 0)
  })),
  totalItems: () => set((state) => state.items.reduce((sum, item) => sum + item.quantity, 0))
}))
