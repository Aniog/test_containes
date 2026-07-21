// Seed product data for Velmora Fine Jewelry
const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    price: 42,
    description: "A stunning gold ear cuff with crystal accent. Perfect for adding a touch of sparkle to any outfit.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isNew: false,
    isBestseller: true,
    variants: ["Gold", "Silver"]
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    description: "Multicolor floral crystal necklace that captures the beauty of a blooming garden.",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Necklaces",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isNew: true,
    isBestseller: true,
    variants: ["Gold"]
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    description: "Chunky gold dome huggie earrings that make a bold statement while staying elegant.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Huggies",
    material: "18K Gold Plated",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    isNew: false,
    isBestseller: true,
    variants: ["Gold", "Silver"]
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate detailing for a vintage-inspired look.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    category: "Earrings",
    material: "18K Gold Plated",
    rating: 4.6,
    reviews: 92,
    inStock: true,
    isNew: false,
    isBestseller: false,
    variants: ["Gold"]
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    description: "Gift-boxed earring and necklace set. The perfect gift for someone special.",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    category: "Sets",
    material: "18K Gold Plated",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isNew: false,
    isBestseller: true,
    variants: ["Gold"]
  }
];

const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
const materials = ["18K Gold Plated", "Sterling Silver"];

export { products, categories, materials };
