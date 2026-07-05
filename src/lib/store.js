import { create } from 'zustand'

export const useCart = create((set) => ({
  items: [],
  addItem: (product, variant) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id && item.variant === variant)
    if (existingItem) {
      return {
        items: state.items.map(item =>
          item.id === product.id && item.variant === variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
    }
    return { items: [...state.items, { ...product, variant, quantity: 1 }] }
  }),
  removeItem: (itemId, variant) => set((state) => ({
    items: state.items.filter(item => !(item.id === itemId && item.variant === variant))
  })),
  updateQuantity: (itemId, variant, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.id === itemId && item.variant === variant
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  })),
  clearCart: () => set({ items: [] }),
  getTotal: () => {
    const items = useCart.getState().items
    return items.reduce((total, item) => total + (item.data?.price || item.price) * item.quantity, 0)
  }
}))
