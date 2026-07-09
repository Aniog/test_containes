// Seed product data for Velmora Fine Jewelry
// 5 elegant demi-fine gold jewelry pieces

const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    price: 42,
    description: "A stunning gold ear cuff with crystal accent that adds instant elegance to any look. Perfect for stacking or wearing alone for a minimalist statement.",
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
    ],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    variants: ["Gold", "Silver"],
    details: {
      materials: "18K Gold Plated over brass, Crystal accent",
      care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch.",
      shipping: "Free worldwide shipping on all orders. 30-day returns."
    }
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    price: 68,
    description: "A multicolor floral crystal necklace that captures the beauty of a blooming garden. Delicate and feminine, perfect for adding a pop of color to any outfit.",
    category: "Necklaces",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
    ],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    variants: ["Gold", "Silver"],
    details: {
      materials: "18K Gold Plated over brass, Multicolor crystals",
      care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch.",
      shipping: "Free worldwide shipping on all orders. 30-day returns."
    }
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings that make a bold yet sophisticated statement. These versatile earrings transition seamlessly from day to night.",
    category: "Huggies",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
    variants: ["Gold", "Silver"],
    details: {
      materials: "18K Gold Plated over brass",
      care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch.",
      shipping: "Free worldwide shipping on all orders. 30-day returns."
    }
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate amber-toned detailing. These artisan-inspired earrings bring warmth and sophistication to any ensemble.",
    category: "Earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
    ],
    rating: 4.6,
    reviews: 72,
    inStock: true,
    featured: true,
    variants: ["Gold"],
    details: {
      materials: "18K Gold Plated over brass, Filigree detailing",
      care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch.",
      shipping: "Free worldwide shipping on all orders. 30-day returns."
    }
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    price: 95,
    description: "A gift-boxed earring and necklace set that exudes timeless elegance. Perfect for gifting or treating yourself to a complete coordinated look.",
    category: "Sets",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&h=1000&fit=crop"
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    featured: true,
    variants: ["Gold"],
    details: {
      materials: "18K Gold Plated over brass, Gift box included",
      care: "Avoid contact with water, perfume, and cosmetics. Store in provided jewelry pouch.",
      shipping: "Free worldwide shipping on all orders. 30-day returns."
    }
  }
];

export default products;
