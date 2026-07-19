import { create } from 'zustand';

export const products = [
  {
    id: 'p-1',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'Earrings',
    material: 'Gold Plated',
    imgId: 'product-img-vivid-aura',
    titleId: 'product-title-vivid-aura',
    descId: 'product-desc-vivid-aura',
    description: 'A striking gold ear cuff adorned with delicate crystal accents. Perfect for adding a touch of modern drama to any look without the need for a piercing.',
    tone: 'Gold',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 'p-2',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'Necklaces',
    material: 'Gold Plated',
    imgId: 'product-img-majestic-flora',
    titleId: 'product-title-majestic-flora',
    descId: 'product-desc-majestic-flora',
    description: 'A breathtaking multicolor floral crystal necklace that captures the light beautifully. An exquisite statement piece for elegant evenings.',
    tone: 'Gold',
    rating: 4.9,
    reviews: 86,
  },
  {
    id: 'p-3',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    imgId: 'product-img-golden-sphere',
    titleId: 'product-title-golden-sphere',
    descId: 'product-desc-golden-sphere',
    description: 'Chunky gold dome huggie earrings offering a sleek, vintage-inspired silhouette. Lightweight enough for daily wear.',
    tone: 'Gold',
    rating: 4.7,
    reviews: 210,
  },
  {
    id: 'p-4',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'Earrings',
    material: 'Gold Plated',
    imgId: 'product-img-amber-lace',
    titleId: 'product-title-amber-lace',
    descId: 'product-desc-amber-lace',
    description: 'Textured gold filigree drop earrings with intricate detailing. These timeless beauties evoke the charm of heirloom treasures.',
    tone: 'Gold',
    rating: 4.9,
    reviews: 42,
  },
  {
    id: 'p-5',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'Sets',
    material: '18K Gold Plated',
    imgId: 'product-img-royal-heirloom',
    titleId: 'product-title-royal-heirloom',
    descId: 'product-desc-royal-heirloom',
    description: 'A beautifully gift-boxed earring and necklace set featuring matching vintage-inspired pendants. The perfect gift for someone special.',
    tone: 'Gold',
    rating: 5.0,
    reviews: 58,
  }
];

export const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  addItem: (product, quantity = 1, tone = 'Gold') => {
    const { items } = get();
    const existingItem = items.find(
      (item) => item.product.id === product.id && item.tone === tone
    );

    if (existingItem) {
      set({
        items: items.map((item) =>
          item.product.id === product.id && item.tone === tone
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
        isOpen: true,
      });
    } else {
      set({ items: [...items, { product, quantity, tone }], isOpen: true });
    }
  },
  removeItem: (productId, tone) => {
    set({
      items: get().items.filter(
        (item) => !(item.product.id === productId && item.tone === tone)
      ),
    });
  },
  updateQuantity: (productId, tone, quantity) => {
    if (quantity === 0) {
      get().removeItem(productId, tone);
      return;
    }
    set({
      items: get().items.map((item) =>
        item.product.id === productId && item.tone === tone
          ? { ...item, quantity }
          : item
      ),
    });
  },
  clearCart: () => set({ items: [] }),
  get cartTotal() {
    return get().items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  },
  get itemCount() {
    return get().items.reduce((count, item) => count + item.quantity, 0);
  },
}));
