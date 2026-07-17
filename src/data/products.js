// Seed product data for Velmora Fine Jewelry
// 5 elegant demi-fine gold jewelry pieces

const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    price: 42,
    description:
      "A delicate gold ear cuff adorned with a crystal accent that catches the light with every turn. Designed for the modern minimalist who appreciates subtle sparkle.",
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Gold+Ear+Cuff&font=playfair-display",
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Vivid+Aura+Jewels&font=playfair-display",
    ],
    rating: 4.8,
    reviews: 124,
    bestseller: true,
    variants: ["Gold", "Silver"],
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    price: 68,
    description:
      "A multicolor floral crystal necklace that brings a touch of botanical elegance to any outfit. Each crystal is hand-set for maximum brilliance.",
    category: "Necklaces",
    material: "18K Gold Plated",
    images: [
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Floral+Necklace&font=playfair-display",
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Majestic+Flora&font=playfair-display",
    ],
    rating: 4.9,
    reviews: 89,
    bestseller: true,
    variants: ["Gold"],
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    price: 38,
    description:
      "Chunky gold dome huggie earrings that make a statement while staying effortlessly comfortable. Perfect for everyday wear or stacking with other pieces.",
    category: "Huggies",
    material: "18K Gold Plated",
    images: [
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Gold+Huggies&font=playfair-display",
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Golden+Sphere&font=playfair-display",
    ],
    rating: 4.7,
    reviews: 156,
    bestseller: true,
    variants: ["Gold", "Silver"],
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    price: 54,
    description:
      "Textured gold filigree drop earrings inspired by artisan metalwork. The intricate openwork design catches the light beautifully as you move.",
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Filigree+Earrings&font=playfair-display",
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Amber+Lace&font=playfair-display",
    ],
    rating: 4.6,
    reviews: 72,
    bestseller: false,
    variants: ["Gold"],
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    price: 95,
    description:
      "A gift-boxed set featuring a matching earring and necklace duo. Timeless design that transitions seamlessly from day to evening. The perfect gift for someone special.",
    category: "Sets",
    material: "18K Gold Plated",
    images: [
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Jewelry+Set&font=playfair-display",
      "https://placehold.co/600x600/FFF5EB/8B6914?text=Royal+Heirloom&font=playfair-display",
    ],
    rating: 4.9,
    reviews: 203,
    bestseller: true,
    variants: ["Gold", "Silver"],
  },
];

// Helper functions
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug) || null;
};

export const getRelatedProducts = (productId, limit = 4) => {
  return products
    .filter((p) => p.id !== productId)
    .slice(0, limit);
};

export const getBestsellers = () => {
  return products.filter((p) => p.bestseller);
};

export const getProductsByCategory = (category) => {
  return products.filter((p) => p.category === category);
};

export const getAllProducts = () => {
  return products;
};

export default products;
