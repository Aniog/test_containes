export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    price: 42,
    category: "Earrings",
    material: "Gold",
    description: "A delicate ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle sparkle to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted with precision, the 18K gold-plated cuff features a single faceted crystal that refracts light beautifully. Wear it alone for quiet elegance or stack with other pieces for a more dramatic effect.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    variants: ["Gold"],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    price: 68,
    category: "Necklaces",
    material: "Gold",
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is carefully selected for its unique hue and brilliance.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the delicate beauty of wildflowers. A cluster of hand-selected crystals in warm amber, soft rose, and deep emerald tones creates a piece that feels both timeless and contemporary. Suspended from a fine 18K gold-plated chain.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    price: 38,
    category: "Huggies",
    material: "Gold",
    description: "Chunky dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the perfect everyday statement.",
    longDescription: "The Golden Sphere Huggies embody quiet confidence. Their rounded dome shape creates a soft, sculptural presence that complements both casual and formal looks. Crafted in 18K gold plating with a brushed finish that feels warm against the skin.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632787350-4e68b0bdad6e?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    price: 54,
    category: "Earrings",
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that moves gracefully.",
    longDescription: "The Amber Lace Earrings are a love letter to traditional craftsmanship. Each pair features delicate filigree work that echoes the intricate patterns of vintage lace. The warm gold tone and gentle swing make these earrings a favorite for special occasions and everyday elegance alike.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    price: 95,
    category: "Earrings",
    material: "Gold",
    description: "A curated gift-boxed set featuring a matching earring and necklace. The perfect present for someone you treasure.",
    longDescription: "The Royal Heirloom Set is our most cherished offering. This thoughtfully curated pairing includes our signature huggie earrings and a delicate pendant necklace, presented in a keepsake box. Each piece is designed to be worn together or separately, creating endless styling possibilities.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
    ],
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getRelatedProducts = (currentId, limit = 4) => {
  return products.filter(p => p.id !== currentId).slice(0, limit);
};
