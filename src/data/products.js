// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Elegant gold ear cuff with crystal accent. A delicate statement piece that wraps beautifully around your ear.",
    price: 42,
    category: "earrings",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 128,
    inStock: true,
    variants: ["gold", "silver"]
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace that catches the light with every movement. A truly captivating piece.",
    price: 68,
    category: "necklaces",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 89,
    inStock: true,
    variants: ["gold", "silver"]
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings. Perfect for everyday wear with a luxurious feel.",
    price: 38,
    category: "huggies",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop"
    ],
    rating: 4,
    reviews: 156,
    inStock: true,
    variants: ["gold", "silver"]
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings with intricate detailing. Vintage-inspired elegance.",
    price: 54,
    category: "earrings",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 72,
    inStock: true,
    variants: ["gold"]
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set. The perfect luxurious gift for someone special.",
    price: 95,
    category: "sets",
    material: "gold",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop"
    ],
    rating: 5,
    reviews: 234,
    inStock: true,
    variants: ["gold", "silver"]
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
    text: "The quality is absolutely stunning. I've received so many compliments on my Golden Sphere Huggies.",
    initials: "S"
  },
  {
    id: 2,
    name: "Emily R.",
    rating: 5,
    text: "Beautiful packaging and even more beautiful jewelry. This is my third purchase from Velmora.",
    initials: "E"
  },
  {
    id: 3,
    name: "Jessica K.",
    rating: 5,
    text: "Perfect for everyday luxury. The Royal Heirloom Set was the best gift I've ever given myself.",
    initials: "J"
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
    caption: "Gold goddess"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
    caption: "Subtle sparkle"
  }
];