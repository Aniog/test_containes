export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    description: "Elegant gold ear cuff with crystal accent. A delicate statement piece that wraps beautifully around the ear.",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop"
    ],
    rating: 4.9,
    reviews: 127,
    variants: ["Gold", "Silver"],
    featured: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    description: "Multicolor floral crystal necklace. Delicate blooms captured in sparkling crystals, perfect for layering.",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop"
    ],
    rating: 4.8,
    reviews: 89,
    variants: ["Gold", "Rose Gold"],
    featured: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    description: "Chunky gold dome huggie earrings. Substantial yet lightweight, these add instant elegance to any look.",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop"
    ],
    rating: 4.9,
    reviews: 203,
    variants: ["Gold", "Silver"],
    featured: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    description: "Textured gold filigree drop earrings. Intricate lace-like patterns catch the light beautifully.",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
    ],
    rating: 4.7,
    reviews: 64,
    variants: ["Gold"],
    featured: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    description: "Gift-boxed earring + necklace set. The perfect gift for someone special, or a treat for yourself.",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop"
    ],
    rating: 5.0,
    reviews: 156,
    variants: ["Gold"],
    featured: true
  },
  {
    id: 6,
    name: "LUNA CHAIN NECKLACE",
    description: "Delicate chain necklace with crescent moon pendant. Subtle sparkle for everyday elegance.",
    price: 45,
    category: "necklaces",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=750&fit=crop"
    ],
    rating: 4.8,
    reviews: 91,
    variants: ["Gold", "Silver"],
    featured: false
  },
  {
    id: 7,
    name: "CELESTE HUGGIES",
    description: "Small hoop huggies with subtle texture. Your new everyday essential.",
    price: 32,
    category: "huggies",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
    ],
    rating: 4.6,
    reviews: 178,
    variants: ["Gold", "Silver", "Rose Gold"],
    featured: false
  },
  {
    id: 8,
    name: "AURORA STUD EARRINGS",
    description: "Classic stud earrings with a modern twist. Minimalist design meets maximum versatility.",
    price: 28,
    category: "earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1620756236308-65c3ef5d25f2?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop"
    ],
    rating: 4.9,
    reviews: 234,
    variants: ["Gold", "Silver"],
    featured: false
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop" },
  { id: "necklaces", name: "Necklaces", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop" },
  { id: "huggies", name: "Huggies", image: "https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=800&fit=crop" }
];

export const testimonials = [
  { id: 1, name: "Sarah M.", rating: 5, text: "The quality is incredible. I wear my Luna Chain every single day." },
  { id: 2, name: "Emma R.", rating: 5, text: "Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again." },
  { id: 3, name: "Jessica L.", rating: 5, text: "These pieces have become my signature. So many compliments!" }
];

export const ugcImages = [
  { id: 1, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=711&fit=crop", caption: "Everyday elegance" },
  { id: 2, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&h=711&fit=crop", caption: "Layered in gold" },
  { id: 3, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=711&fit=crop", caption: "My daily stack" },
  { id: 4, image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=711&fit=crop", caption: "Effortless style" },
  { id: 5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop", caption: "Timeless pieces" },
  { id: 6, image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=711&fit=crop", caption: "Gold goddess" }
];