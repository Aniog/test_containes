// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Perfect for adding a touch of refined sparkle to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff captures light with its faceted crystal accent, set against warm 18K gold plating. Designed to sit comfortably on the upper ear, this piece adds subtle dimension without overwhelming. Wear it alone for quiet elegance or pair with our huggies for a layered look.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    secondaryImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A statement necklace featuring a multicolor floral crystal pendant on a delicate gold chain. A modern heirloom piece.",
    longDescription: "The Majestic Flora Nectar necklace is a celebration of nature's beauty. Hand-selected crystals in warm amber, soft rose, and clear tones are arranged in a delicate floral motif. Suspended from an 18K gold-plated chain, this piece transitions effortlessly from day to evening.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    secondaryImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are an everyday essential.",
    longDescription: "The Golden Sphere Huggies feature a perfectly proportioned dome shape that catches light from every angle. Crafted with 18K gold plating over hypoallergenic brass, these earrings are comfortable enough for all-day wear and substantial enough to make a statement.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    secondaryImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Silver",
    description: "Textured silver filigree drop earrings with an intricate lace-like pattern. Romantic and timeless.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work. Each delicate strand of silver is carefully shaped and soldered to create a lace-like texture that feels both vintage and contemporary. The cool silver tone adds modern elegance to any look.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    secondaryImage: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Silver",
    description: "A gift-boxed earring and necklace set featuring our signature pieces in silver. The perfect present for someone special.",
    longDescription: "The Royal Heirloom Set pairs our beloved Golden Sphere Huggies with a delicate pendant necklace, presented in a refined silver finish. Presented in a premium gift box with velvet lining, this set is designed for gifting — whether for a milestone birthday, anniversary, or simply to say 'you are treasured.'",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    secondaryImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    inStock: true,
  },
];

// Helper to get product by slug
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

// Get related products (exclude current)
export const getRelatedProducts = (currentId, limit = 4) => {
  return products
    .filter(p => p.id !== currentId)
    .slice(0, limit);
};

// Get products by category
export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};
