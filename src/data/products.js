// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "A stunning gold ear cuff with crystal accent that adds the perfect touch of sparkle to any ensemble. Handcrafted with meticulous attention to detail.",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    variants: ["Gold", "Silver"],
    features: ["Hypoallergenic", "18K Gold Plated", "Handcrafted"]
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "A multicolor floral crystal necklace that captures the beauty of a blooming garden. Each crystal is carefully selected for its brilliance and color.",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    variants: ["Gold", "Silver"],
    features: ["Hypoallergenic", "18K Gold Plated", "Floral Design"]
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings that make a bold yet elegant statement. Perfect for everyday wear or special occasions.",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    variants: ["Gold", "Silver"],
    features: ["Hypoallergenic", "18K Gold Plated", "Chunky Design"]
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings with intricate amber details. These earrings showcase the artisan's craftsmanship and timeless elegance.",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 4.9,
    reviews: 97,
    inStock: true,
    variants: ["Gold", "Silver"],
    features: ["Hypoallergenic", "18K Gold Plated", "Filigree Detail"]
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "A gift-boxed earring and necklace set that embodies luxury and sophistication. The perfect gift for someone special or a treasured addition to your collection.",
    price: 95,
    category: "Sets",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=800&fit=crop"
    ],
    rating: 5.0,
    reviews: 68,
    inStock: true,
    variants: ["Gold", "Silver"],
    features: ["Gift Boxed", "18K Gold Plated", "Complete Set"]
  }
];

export const categories = ["All", "Earrings", "Necklaces", "Huggies", "Sets"];
export const materials = ["All", "18K Gold Plated", "Sterling Silver"];
export const priceRanges = [
  { label: "All", min: 0, max: 1000 },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $80", min: 50, max: 80 },
  { label: "$80+", min: 80, max: 1000 }
];
