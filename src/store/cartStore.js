import { create } from 'zustand'

export const useCartStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  addToCart: (product, variant) =>
    set((state) => {
      // Find the element on the page that has the image source for the added product
      let imgSrc = null;
      if (product.cartImgId) {
         const el = document.querySelector(`[data-strk-img-id="${product.cartImgId}"]`);
         if (el && el.src) {
           imgSrc = el.src;
         }
      } else if (product.imgId) {
         const el = document.querySelector(`[data-strk-img-id="${product.imgId}"]`);
         if (el && el.src) {
           imgSrc = el.src;
         }
      }

      const existingProduct = state.cart.find(
        (item) => item.id === product.id && item.variant === variant
      )

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.variant === variant
              ? { ...item, quantity: item.quantity + 1, imgSrc: imgSrc || item.imgSrc }
              : item
          ),
          isCartOpen: true,
        }
      }
      return {
        cart: [...state.cart, { ...product, variant, quantity: 1, imgSrc }],
        isCartOpen: true,
      }
    }),
  removeFromCart: (productId, variant) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.id === productId && item.variant === variant)
      ),
    })),
  updateQuantity: (productId, variant, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.variant === variant
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0),
    })),
  clearCart: () => set({ cart: [] }),
}))
