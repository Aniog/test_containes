import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],
  isDrawerOpen: false,
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
  addToCart: (product, quantity = 1) => set((state) => {
    const existingItem = state.cart.find(item => item.id === product.id)
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ),
        isDrawerOpen: true
      }
    }
    return { cart: [...state.cart, { ...product, quantity }], isDrawerOpen: true }
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    )
  })),
  clearCart: () => set({ cart: [] }),
}))
