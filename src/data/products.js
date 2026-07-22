// Velmora Fine Jewelry - Seed Product Data

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Lightweight and sculptural, designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, this piece features a single faceted crystal that refracts light like morning dew. Its sculptural form hugs the ear with quiet confidence, making it perfect for both everyday elegance and special occasions.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    category: "Necklaces",
    price: 68,
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Romantic and bold, this piece transforms any outfit into an occasion.",
    longDescription: "The Majestic Flora Nectar necklace is an ode to nature's most delicate beauty. Each crystal petal is individually set in 18K gold-plated brass, creating a luminous garden that rests gracefully at the collarbone. The adjustable chain allows for versatile styling from choker to pendant length.",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: false }
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a modern sculptural silhouette. Bold yet refined, these are the everyday statement you've been looking for.",
    longDescription: "The Golden Sphere Huggies redefine the classic hoop. Cast in substantial 18K gold-plated brass, these dome-shaped huggies offer a contemporary take on a timeless silhouette. Their substantial presence makes a quiet statement, while the hinged closure ensures comfortable all-day wear.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic heirloom piece that feels both vintage and modern.",
    longDescription: "The Amber Lace Earrings are a love letter to traditional craftsmanship. Each pair is meticulously hand-finished to create a delicate filigree pattern reminiscent of antique lace. The warm gold tone and graceful drop silhouette make these earrings a versatile addition to any jewelry collection.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    category: "Necklaces",
    price: 95,
    description: "A gift-boxed earring and necklace set featuring our signature crystal accents. The perfect present for someone you treasure — or yourself.",
    longDescription: "The Royal Heirloom Set is our most cherished offering. This coordinated pairing features a delicate pendant necklace and matching stud earrings, each adorned with our signature crystal accents. Presented in a velvet-lined keepsake box, this set is designed to be passed down through generations.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfumes, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true,
  }
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["18K Gold Plated Brass", "Crystal", "Multicolor Crystals"];

// Helper to get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Helper to get related products (same category, excluding current)
export const getRelatedProducts = (currentProductId, limit = 4) => {
  const current = getProductById(currentProductId);
  if (!current) return [];
  
  return products
    .filter(p => p.id !== currentProductId && p.category === current.category)
    .slice(0, limit);
};
