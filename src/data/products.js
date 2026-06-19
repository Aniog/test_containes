export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop"
    ],
    variants: ["gold", "silver"],
    inStock: true,
    shortDescription: "A delicate ear cuff adorned with a single crystal accent, designed to catch the light with every movement."
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop"
    ],
    variants: ["gold", "silver"],
    inStock: true,
    shortDescription: "A stunning floral pendant featuring multicolor crystals, suspended from a fine gold chain."
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop"
    ],
    variants: ["gold", "silver"],
    inStock: true,
    shortDescription: "Bold dome-shaped huggie earrings with a polished gold finish, perfect for everyday elegance."
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.6,
    reviews: 72,
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&h=1000&fit=crop"
    ],
    variants: ["gold", "silver"],
    inStock: true,
    shortDescription: "Intricate filigree drop earrings with a warm amber tone, inspired by vintage lacework."
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set",
    price: 95,
    category: "sets",
    material: "gold",
    rating: 5.0,
    reviews: 43,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop"
    ],
    variants: ["gold", "silver"],
    inStock: true,
    shortDescription: "A luxurious gift set featuring matching earrings and necklace, beautifully presented in our signature box."
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop" }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is incredible for the price. I've received so many compliments on my Vivid Aura ear cuff."
  },
  {
    id: 2,
    name: "Emma L.",
    rating: 5,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She absolutely loved it. The packaging was beautiful."
  },
  {
    id: 3,
    name: "Jessica R.",
    rating: 5,
    text: "Finally found jewelry that feels luxurious without breaking the bank. The Golden Sphere Huggies are my everyday go-to."
  }
];

export const ugcPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=700&fit=crop", caption: "Everyday elegance" },
  { id: 2, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop", caption: "Stacked & styled" },
  { id: 3, image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&h=700&fit=crop", caption: "Golden hour glow" },
  { id: 4, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=700&fit=crop", caption: "Gift of love" },
  { id: 5, image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=700&fit=crop", caption: "Layered perfection" },
  { id: 6, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=700&fit=crop", caption: "Minimalist chic" }
];
