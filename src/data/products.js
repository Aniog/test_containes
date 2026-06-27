// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    description: "Gold ear cuff with crystal accent. A delicate, ethereal piece that wraps around your ear with graceful elegance. The subtle crystal catch reflects light beautifully.",
    price: 42,
    category: "earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=750&fit=crop"
    ],
    rating: 4.9,
    reviews: 127,
    inStock: true,
    variants: ["Gold", "Silver"]
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    description: "Multicolor floral crystal necklace. Inspired by morning dew on flowers, this necklace features delicate crystal blooms that cascade along a fine gold chain.",
    price: 68,
    category: "necklaces",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=750&fit=crop"
    ],
    rating: 4.8,
    reviews: 89,
    inStock: true,
    variants: ["Gold", "Rose Gold"]
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    description: "Chunky gold dome huggie earrings. A statement piece with substantial presence. These sculptural hoops feature a smooth, polished dome that catches every angle of light.",
    price: 38,
    category: "huggies",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e252a018695?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=750&fit=crop"
    ],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    variants: ["Gold", "Silver"]
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    description: "Textured gold filigree drop earrings. Intricate filigree work meets modern minimalism. These delicate drops feature ornate patterns that dance with movement.",
    price: 54,
    category: "earrings",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=750&fit=crop"
    ],
    rating: 4.7,
    reviews: 76,
    inStock: true,
    variants: ["Gold"]
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    description: "Gift-boxed earring + necklace set. The ultimate statement of elegance. This coordinated set features matching pieces with timeless design that can be passed down through generations.",
    price: 95,
    category: "sets",
    material: "18K Gold Plated",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&h=750&fit=crop"
    ],
    rating: 5.0,
    reviews: 54,
    inStock: true,
    variants: ["Gold"]
  }
];

export const categories = [
  { id: "earrings", name: "Earrings", count: 2 },
  { id: "necklaces", name: "Necklaces", count: 1 },
  { id: "huggies", name: "Huggies", count: 1 },
  { id: "sets", name: "Sets", count: 1 }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "The quality is incredible. I've worn my Golden Sphere Huggies every day for months and they still look brand new.",
    initials: "S"
  },
  {
    id: 2,
    name: "Emma R.",
    rating: 5,
    text: "Perfect for gifting. The packaging itself feels like a luxury experience. My mother loved her Royal Heirloom Set.",
    initials: "E"
  },
  {
    id: 3,
    name: "Jessica L.",
    rating: 5,
    text: "Finally found demi-fine jewelry that doesn't irritate my sensitive ears. The quality is outstanding.",
    initials: "J"
  }
];

export const ugcContent = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop",
    caption: "Everyday elegance"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop",
    caption: "My everyday staple"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=600&fit=crop",
    caption: "Obsessed with this piece"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=600&fit=crop",
    caption: "Subtle sparkle"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop",
    caption: "Gift for myself"
  }
];

export const getProductById = (id) => products.find(p => p.id === parseInt(id));

export const getProductsByCategory = (category) => 
  category === "all" ? products : products.filter(p => p.category === category);