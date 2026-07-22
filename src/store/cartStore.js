import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (product, variant = 'gold', quantity = 1) => {
    const { items } = get();
    const existingIndex = items.findIndex(
      (item) => item.id === product.id && item.variant === variant
    );

    if (existingIndex > -1) {
      const updated = [...items];
      updated[existingIndex] = {
        ...updated[existingIndex],
        quantity: updated[existingIndex].quantity + quantity,
      };
      set({ items: updated, isOpen: true });
    } else {
      set({
        items: [
          ...items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            variant,
            quantity,
            imgQuery: product.imgQuery,
          },
        ],
        isOpen: true,
      });
    }
  },

  removeItem: (id, variant) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === id && item.variant === variant)
      ),
    }));
  },

  updateQuantity: (id, variant, quantity) => {
    if (quantity < 1) {
      get().removeItem(id, variant);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      ),
    }));
  },

  incrementQuantity: (id, variant) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }));
  },

  decrementQuantity: (id, variant) => {
    const { items } = get();
    const item = items.find(
      (i) => i.id === id && i.variant === variant
    );
    if (item && item.quantity <= 1) {
      get().removeItem(id, variant);
    } else {
      set((state) => ({
        items: state.items.map((i) =>
          i.id === id && i.variant === variant
            ? { ...i, quantity: i.quantity - 1 }
            : i
        ),
      }));
    }
  },

  clearCart: () => set({ items: [] }),

  get totalItems() {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },

  getTotalItems: () =>
    get().items.reduce((sum, item) => sum + item.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));

export default useCartStore;
