import { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A luminous gold ear cuff adorned with a single crystal accent. Designed to hug the ear with effortless elegance — wear solo or stacked.',
    materials: '18K gold-plated brass, crystal accent',
    care: 'Avoid contact with water, perfumes and lotions. Store in the provided velvet pouch. Wipe gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5-10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: [
      { alt: 'Vivid Aura Jewels - front' },
      { alt: 'Vivid Aura Jewels - on model' },
      { alt: 'Vivid Aura Jewels - detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'An enchanting floral necklace featuring multicolor crystal petals on a fine gold chain. A statement piece that captures light from every angle.',
    materials: '18K gold-plated brass, multicolor Swarovski crystals',
    care: 'Avoid contact with water, perfumes and lotions. Store flat in the provided pouch. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5-10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: [
      { alt: 'Majestic Flora Nectar - front' },
      { alt: 'Majestic Flora Nectar - on model' },
      { alt: 'Majestic Flora Nectar - detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviewCount: 201,
    description: 'Chunky gold dome huggies with a warm, sculptural silhouette. These everyday essentials close seamlessly for a polished look.',
    materials: '18K gold-plated brass',
    care: 'Avoid contact with water, perfumes and lotions. Store in the provided velvet pouch.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5-10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: [
      { alt: 'Golden Sphere Huggies - front' },
      { alt: 'Golden Sphere Huggies - on model' },
      { alt: 'Golden Sphere Huggies - detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings with an intricate lace-like pattern. Lightweight and luminous, they sway with every movement.',
    materials: '18K gold-plated brass, amber-tone crystal drops',
    care: 'Avoid contact with water, perfumes and lotions. Store in the provided velvet pouch.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5-10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: [
      { alt: 'Amber Lace Earrings - front' },
      { alt: 'Amber Lace Earrings - on model' },
      { alt: 'Amber Lace Earrings - detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'necklaces',
    material: 'gold',
    rating: 5.0,
    reviewCount: 43,
    description: 'A gift-boxed earring and necklace set designed for life\'s most meaningful moments. The matching duo features delicate gold detailing with crystal accents.',
    materials: '18K gold-plated brass, crystal accents. Gift box included.',
    care: 'Avoid contact with water, perfumes and lotions. Store in the provided velvet-lined gift box.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5-10 business days.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: [
      { alt: 'Royal Heirloom Set - front' },
      { alt: 'Royal Heirloom Set - on model' },
      { alt: 'Royal Heirloom Set - detail' },
    ],
    variants: ['Gold', 'Silver'],
    defaultVariant: 'Gold',
  },
];

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (i) => i.id === action.payload.id && i.variant === action.payload.variant
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id && i.variant === action.payload.variant
              ? { ...i, quantity: i.quantity + (action.payload.quantity || 1) }
              : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
        ),
      };
    }
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (i) => !(i.id === action.payload.id && i.variant === action.payload.variant)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload.id && i.variant === action.payload.variant
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });

  const addItem = useCallback((product, variant, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id: product.id, name: product.name, price: product.price, variant, quantity },
    });
  }, []);

  const removeItem = useCallback((id, variant) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variant } });
  }, []);

  const updateQuantity = useCallback((id, variant, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variant, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: 'TOGGLE_CART' });
  }, []);

  const cartOpen = state.isOpen;
  const cartItems = state.items;
  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        cartOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export { PRODUCTS };
