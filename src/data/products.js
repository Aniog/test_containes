export const products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "A statement ear cuff adorned with a single crystal accent, catching light with every movement. Designed to elevate any look from day to evening.",
    materials: "18K gold plated brass with cubic zirconia crystal. Nickel-free, hypoallergenic.",
    variants: ["gold", "silver"],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    ],
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A delicate chain adorned with multicolor floral crystal clusters, inspired by a garden in full bloom. The perfect layering piece or standalone statement.",
    materials: "18K gold plated sterling silver with hand-set crystals. Adjustable 16-18 inch chain.",
    variants: ["gold", "silver"],
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141589-67f0d569b6f5?w=800&q=80",
    ],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 203,
    description: "Chunky gold dome huggie earrings that hug the earlobe with sculptural elegance. A modern classic for everyday luxury.",
    materials: "18K gold plated brass. Hinged closure for secure, comfortable wear. Hypoallergenic.",
    variants: ["gold", "silver"],
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
    ],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    rating: 4.8,
    reviewCount: 156,
    description: "Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight yet impactful, perfect for special occasions.",
    materials: "18K gold plated brass with intricate filigree detailing. Butterfly back closure.",
    variants: ["gold", "silver"],
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "necklaces",
    price: 95,
    rating: 5.0,
    reviewCount: 67,
    description: "A curated gift set featuring our signature earring and necklace pairing, presented in a luxe velvet box. The ultimate gift for someone special.",
    materials: "18K gold plated sterling silver. Set includes one pair of earrings and one necklace. Gift box included.",
    variants: ["gold", "silver"],
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
    ],
  },
];

export const categories = [
  { id: "earrings", name: "Earrings", count: 12 },
  { id: "necklaces", name: "Necklaces", count: 8 },
  { id: "huggies", name: "Huggies", count: 6 },
];

export const testimonials = [
  {
    id: 1,
    text: "The quality is incredible for the price. I wear my Vivid Aura ear cuff every single day — it still looks brand new after months.",
    author: "Sarah M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. The packaging alone feels so luxurious.",
    author: "Rachel K.",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't irritate my sensitive skin. These pieces are hypoallergenic AND gorgeous. I'm obsessed.",
    author: "Emma L.",
    rating: 5,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getProductsByCategory = (category) =>
  category === "all"
    ? products
    : products.filter((p) => p.category === category);
