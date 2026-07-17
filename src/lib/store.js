import { create } from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  isCartOpen: false,
  setCartOpen: (open) => set({ isCartOpen: open }),
  addToCart: (product, quantity = 1) => set((state) => {
    const existing = state.cart.find(item => item.id === product.id);
    if (existing) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ),
        isCartOpen: true
      };
    }
    return { cart: [...state.cart, { ...product, quantity }], isCartOpen: true };
  }),
  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter(item => item.id !== productId)
  })),
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0)
  })),
}));

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    imgId: 'val-prod-vivid-aura',
    titleId: 'val-title-vivid-aura',
    price: 42,
    category: 'Earrings',
    description: 'Gold ear cuff with crystal accent, designed to catch the light from every angle.',
    details: '18K Gold Plated Brass, Cubic Zirconia Crystal. Hypoallergenic and nickel-free.',
    images: ['vivid-aura-1', 'vivid-aura-2']
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    imgId: 'val-prod-majestic-flora',
    titleId: 'val-title-majestic-flora',
    price: 68,
    category: 'Necklaces',
    description: 'Multicolor floral crystal necklace inspired by the nectar of wild blooming meadows.',
    details: '18K Gold Plated Brass, Mixed Crystal Stones. Adjustable length: 16-18 inches.',
    images: ['majestic-flora-1', 'majestic-flora-2']
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    imgId: 'val-prod-golden-sphere',
    titleId: 'val-title-golden-sphere',
    price: 38,
    category: 'Huggies',
    description: 'Chunky gold dome huggie earrings that provide a bold yet minimalist statement.',
    details: '18K Gold Plated Brass. Diameter: 12mm. Click-top closure.',
    images: ['golden-sphere-1', 'golden-sphere-2']
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    imgId: 'val-prod-amber-lace',
    titleId: 'val-title-amber-lace',
    price: 54,
    category: 'Earrings',
    description: 'Textured gold filigree drop earrings, delicate as lace and warm as amber sunlight.',
    details: '18K Gold Plated Brass. Length: 1.5 inches. Lever-back closure.',
    images: ['amber-lace-1', 'amber-lace-2']
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    imgId: 'val-prod-royal-heirloom',
    titleId: 'val-title-royal-heirloom',
    price: 95,
    category: 'Sets',
    description: 'Gift-boxed earring and necklace set, a timeless duo for the modern heiress.',
    details: '18K Gold Plated Brass, Gift Box included. Includes Pendant Necklace and matching Studs.',
    images: ['royal-heirloom-1', 'royal-heirloom-2']
  }
];
