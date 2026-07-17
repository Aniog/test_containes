// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    description: "A sculptural ear cuff adorned with a single crystal accent. Designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a statement of quiet confidence. Handcrafted with precision, this piece features a delicate crystal that refracts light beautifully against warm gold plating. Perfect worn alone or stacked with your favorite huggies.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["Gold Tone", "Silver Tone"],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    description: "A delicate necklace featuring a cluster of multicolor floral crystals. A modern heirloom.",
    longDescription: "Inspired by wildflower meadows at golden hour, the Majestic Flora Nectar necklace combines delicate chains with a vibrant crystal cluster. Each stone is carefully selected for its unique hue, creating a piece that feels both timeless and contemporary.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
    ],
    variants: ["Gold Tone", "Silver Tone"],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky dome huggie earrings with a soft matte finish. Effortlessly elegant.",
    longDescription: "The Golden Sphere Huggies are our most beloved everyday piece. Their sculptural dome shape catches light from every angle while remaining comfortable enough to wear from morning coffee to evening events. The secure hinge closure ensures they stay in place.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["Gold Tone", "Silver Tone"],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern.",
    longDescription: "The Amber Lace Earrings are a celebration of craftsmanship. Each pair is meticulously detailed with a filigree pattern that evokes vintage lace. The warm gold tone and graceful drop length make them perfect for both special occasions and elevated everyday wear.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 67,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: ["Gold Tone", "Silver Tone"],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    description: "A curated gift-boxed set featuring matching earrings and necklace. The ultimate gesture.",
    longDescription: "The Royal Heirloom Set is our signature offering for those who appreciate the art of gifting. This beautifully packaged set includes our bestselling Golden Sphere Huggies and a delicate pendant necklace. Presented in a velvet-lined keepsake box, it's ready for the most meaningful moments.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80"
    ],
    variants: ["Gold Tone", "Silver Tone"],
    inStock: true,
  },
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getRelatedProducts = (currentProduct, limit = 4) => {
  return products
    .filter(p => p.id !== currentProduct.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};
