import { create } from 'zustand'

export const useCartStore = create((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  items: [],
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id)
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isOpen: true
      }
    }
    return { 
      items: [...state.items, { ...product, quantity: 1 }],
      isOpen: true
    }
  }),
  removeItem: (productId) => set((state) => ({
    items: state.items.filter(item => item.id !== productId)
  }), false),
  updateQuantity: (productId, quantity) => set((state) => ({
    items: quantity === 0 
      ? state.items.filter(item => item.id !== productId)
      : state.items.map(item => 
          item.id === productId 
            ? { ...item, quantity } 
            : item
        )
  }))
}))
