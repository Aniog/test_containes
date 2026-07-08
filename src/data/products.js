// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent, delicately handcrafted for a subtle sparkle that catches the light with every turn.",
    price: 42,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    featured: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace, a statement piece that brings botanical elegance to any ensemble.",
    price: 68,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
    category: "Necklaces",
    material: "Gold",
    inStock: true,
    rating: 4.9,
    reviews: 89,
    featured: true,
    bestseller: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings, the perfect everyday luxury with a modern, sculptural silhouette.",
    price: 38,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    category: "Huggies",
    material: "Gold",
    inStock: true,
    rating: 4.7,
    reviews: 156,
    featured: true,
    bestseller: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings, intricate openwork that dances with light — heirloom quality for everyday wear.",
    price: 54,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.9,
    reviews: 67,
    featured: true,
    bestseller: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set, our most coveted pairing — wrapped and ready for the ones you love most.",
    price: 95,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    category: "Sets",
    material: "Gold",
    inStock: true,
    rating: 5.0,
    reviews: 42,
    featured: true,
    bestseller: true,
  },
  {
    id: 6,
    name: "Whisper Chain Necklace",
    description: "Delicate gold chain with minimalist pendant, designed for layering or wearing alone.",
    price: 48,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    category: "Necklaces",
    material: "Gold",
    inStock: true,
    rating: 4.6,
    reviews: 93,
    featured: false,
    bestseller: false,
  },
  {
    id: 7,
    name: "Luna Crescent Hoops",
    description: "Crescent moon huggy hoops in polished gold, a celestial touch for day or night.",
    price: 44,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    ],
    category: "Huggies",
    material: "Gold",
    inStock: true,
    rating: 4.8,
    reviews: 71,
    featured: false,
    bestseller: false,
  },
  {
    id: 8,
    name: "Petite Pearl Drops",
    description: "Tiny freshwater pearl drops on gold posts — understated elegance for bridal or everyday.",
    price: 36,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    category: "Earrings",
    material: "Gold",
    inStock: true,
    rating: 4.7,
    reviews: 108,
    featured: false,
    bestseller: false,
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

export function getBestsellers() {
  return products.filter(p => p.bestseller);
}

export function getRelatedProducts(productId, limit = 4) {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

export function getProductsByCategory(category) {
  if (!category || category === 'All') return products;
  return products.filter(p => p.category === category);
}

export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];

export const materials = ["Gold", "Silver"];
