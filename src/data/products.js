// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "Vivid Aura Jewels",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light like morning dew. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", alt: "Vivid Aura Jewels ear cuff in gold" },
      { id: 2, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", alt: "Vivid Aura Jewels worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "Majestic Flora Nectar",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    description: "A multicolor floral crystal necklace that blooms with quiet elegance. Each crystal is hand-selected for its unique hue.",
    longDescription: "The Majestic Flora Nectar necklace captures the ephemeral beauty of a garden in bloom. Delicate gold chains suspend a cluster of hand-cut crystals in soft jewel tones. The adjustable chain allows for versatile styling at 16\" or 18\".",
    material: "18K Gold Plated Brass, Multicolor Crystals",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", alt: "Majestic Flora Nectar necklace" },
      { id: 2, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", alt: "Majestic Flora Nectar worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "Golden Sphere Huggies",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are everyday statement pieces.",
    longDescription: "The Golden Sphere Huggies are a modern classic. Their domed silhouette catches light from every angle, creating a subtle glow against the skin. The secure hinge closure ensures they stay comfortably in place all day.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", alt: "Golden Sphere Huggies" },
      { id: 2, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", alt: "Golden Sphere Huggies worn on model" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "Amber Lace Earrings",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette for special occasions.",
    longDescription: "The Amber Lace Earrings are a love letter to traditional craftsmanship. Each pair is meticulously detailed with filigree work that echoes vintage lace patterns. The warm gold tone and graceful drop length make these earrings a timeless addition to any jewelry collection.",
    material: "18K Gold Plated Brass",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", alt: "Amber Lace Earrings" },
      { id: 2, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", alt: "Amber Lace Earrings detail" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "Royal Heirloom Set",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    description: "A gift-boxed earring and necklace set. The perfect heirloom-quality gift for someone you treasure.",
    longDescription: "The Royal Heirloom Set pairs our signature Golden Sphere Huggies with a delicate pendant necklace. Presented in a velvet-lined keepsake box, this set is designed to be passed down through generations. Each piece is crafted with the same attention to detail that defines the Velmora collection.",
    material: "18K Gold Plated Brass, Crystal",
    care: "Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", alt: "Royal Heirloom Set in gift box" },
      { id: 2, url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", alt: "Royal Heirloom Set pieces" },
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (currentProductId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentProductId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};
