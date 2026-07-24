// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    price: 42,
    description: "A stunning gold ear cuff with crystal accent that adds instant elegance to any look. Perfect for everyday wear or special occasions.",
    material: "18K Gold Plated",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    featured: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    price: 68,
    description: "Multicolor floral crystal necklace that captures the beauty of a blooming garden. A statement piece that elevates any outfit.",
    material: "18K Gold Plated",
    category: "Necklaces",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true,
    rating: 4.9,
    reviews: 89,
    featured: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings that are both comfortable and stylish. Perfect for stacking or wearing alone.",
    material: "18K Gold Plated",
    category: "Huggies",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
    rating: 4.7,
    reviews: 156,
    featured: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate detailing. These earrings showcase masterful craftsmanship and timeless elegance.",
    material: "18K Gold Plated",
    category: "Earrings",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true,
    rating: 4.6,
    reviews: 72,
    featured: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    price: 95,
    description: "A gift-boxed set featuring matching earrings and necklace. The perfect gift for someone special or a treasured addition to your own collection.",
    material: "18K Gold Plated",
    category: "Sets",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["Gold"],
    inStock: true,
    rating: 5.0,
    reviews: 45,
    featured: true
  }
];

export default products;
