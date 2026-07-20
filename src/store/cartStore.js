import { create } from 'zustand'

export const useCartStore = create((set) => ({
  isOpen: false,
  items: [],
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (item) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id)
    if (existingItem) {
      return {
        items: state.items.map((i) => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
        isOpen: true,
      }
    }
    return { items: [...state.items, { ...item, quantity: 1 }], isOpen: true }
  }),
  removeItem: (id) => set((state) => ({
    items: state.items.filter((i) => i.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    items: quantity === 0 
      ? state.items.filter((i) => i.id !== id)
      : state.items.map((i) => i.id === id ? { ...i, quantity } : i)
  })),
  cartTotal: () => {
    return useCartStore.getState().items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },
  cartCount: () => {
    return useCartStore.getState().items.reduce((count, item) => count + item.quantity, 0)
  }
}))