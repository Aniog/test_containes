// Seed product data for Velmora Fine Jewelry
// All prices in USD, demi-fine 18K gold plated

export const products = [
  {
    id: 1,
    slug: "vivid-aura-jewels",
    name: "VIVID AURA JEWELS",
    price: 42,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "A sculptural ear cuff featuring a delicate crystal accent that catches the light with every movement. Designed to sit gracefully along the ear's natural curve.",
    shortDescription: "Gold ear cuff with crystal accent",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1200&q=80"
    ],
    inStock: true,
  },
  {
    id: 2,
    slug: "majestic-flora-nectar",
    name: "MAJESTIC FLORA NECTAR",
    price: 68,
    category: "Necklaces",
    material: "18K Gold Plated",
    description: "A statement necklace adorned with hand-set multicolor crystals in a delicate floral arrangement. The perfect balance of romance and modern elegance.",
    shortDescription: "Multicolor floral crystal necklace",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80"
    ],
    inStock: true,
  },
  {
    id: 3,
    slug: "golden-sphere-huggies",
    name: "GOLDEN SPHERE HUGGIES",
    price: 38,
    category: "Huggies",
    material: "18K Gold Plated",
    description: "Chunky yet refined dome huggies with a mirror-polished finish. These everyday essentials add a touch of quiet luxury to any look.",
    shortDescription: "Chunky gold dome huggie earrings",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1200&q=80"
    ],
    inStock: true,
  },
  {
    id: 4,
    slug: "amber-lace-earrings",
    name: "AMBER LACE EARRINGS",
    price: 54,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "Intricately textured filigree drops inspired by vintage lacework. Lightweight and luminous, these earrings move beautifully with you.",
    shortDescription: "Textured gold filigree drop earrings",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1200&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80",
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=1200&q=80"
    ],
    inStock: true,
  },
  {
    id: 5,
    slug: "royal-heirloom-set",
    name: "ROYAL HEIRLOOM SET",
    price: 95,
    category: "Earrings",
    material: "18K Gold Plated",
    description: "A curated gift-boxed pairing of our signature huggies and a delicate pendant necklace. Presented in a velvet-lined keepsake box — the ultimate expression of considered gifting.",
    shortDescription: "Gift-boxed earring + necklace set",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1200&q=80"
    ],
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentId)
    .slice(0, limit);
};

// Categories for filtering
export const categories = ["All", "Earrings", "Necklaces", "Huggies"];

// Materials
export const materials = ["All", "18K Gold Plated", "Sterling Silver"];
