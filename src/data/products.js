// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Elegant gold ear cuff with crystal accent. A delicate statement piece that adds a touch of sparkle to any look.",
    price: 42,
    category: "earrings",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 127,
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace that captures the essence of blooming flowers. Perfect for special occasions.",
    price: 68,
    category: "necklaces",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 89,
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings. A modern classic that makes a subtle yet impactful statement.",
    price: 38,
    category: "huggies",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop"
    ],
    rating: 4,
    reviews: 203,
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings with intricate detailing. Vintage-inspired elegance for the modern woman.",
    price: 54,
    category: "earrings",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 156,
    variants: ["gold", "silver"],
    inStock: true
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set. The perfect gift for someone special, or a luxurious treat for yourself.",
    price: 95,
    category: "sets",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 78,
    variants: ["gold", "silver"],
    inStock: true
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=800&fit=crop" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is absolutely stunning. I've received so many compliments on my Golden Sphere Huggies."
  },
  {
    id: 2,
    name: "Jessica L.",
    rating: 5,
    text: "Beautiful packaging and even more beautiful jewelry. This is my third purchase from Velmora."
  },
  {
    id: 3,
    name: "Amanda R.",
    rating: 5,
    text: "Perfect for everyday luxury. The Royal Heirloom Set was the best gift I've ever given myself."
  }
];

export const ugcContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop",
    caption: "Everyday elegance ✨"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop",
    caption: "My new favorite piece"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=711&fit=crop",
    caption: "Obsessed with these"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1635767798638-3e252a018695?w=400&h=711&fit=crop",
    caption: "Simple yet stunning"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop",
    caption: "Gold goddess"
  }
];