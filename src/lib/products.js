// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a whisper of brilliance to your everyday look.",
    longDescription: "Handcrafted from 18K gold-plated brass, the Vivid Aura ear cuff features a sculptural silhouette that hugs the ear with quiet elegance. A single faceted crystal is set at the curve, catching light with every turn of the head. Lightweight and comfortable for all-day wear.",
    rating: 4.8,
    reviewCount: 124,
    images: {
      primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A multicolor floral crystal necklace that blooms with quiet opulence. Each stone is hand-selected for its unique hue and brilliance.",
    longDescription: "The Majestic Flora Nectar necklace is a celebration of nature's palette. Delicate gold chains suspend a cluster of faceted crystals in warm amber, soft rose, and deep emerald tones. The pendant sits at the perfect length to complement both bare necks and layered looks.",
    rating: 4.9,
    reviewCount: 87,
    images: {
      primary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural presence. Bold yet refined, these are the everyday statement you have been looking for.",
    longDescription: "The Golden Sphere Huggies feature a perfectly proportioned dome silhouette in warm 18K gold plating. The hinged closure ensures a secure fit, while the substantial form adds quiet confidence to any look. Wear them alone or pair with delicate studs for a layered ear.",
    rating: 4.7,
    reviewCount: 156,
    images: {
      primary: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A timeless silhouette reimagined for the modern woman.",
    longDescription: "Inspired by vintage filigree work, the Amber Lace Earrings feature hand-etched patterns that evoke the delicacy of antique lace. Each pair is finished with a warm gold tone and suspended from a comfortable post back. The elongated drop flatters the face while remaining light enough for daily wear.",
    rating: 4.6,
    reviewCount: 92,
    images: {
      primary: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set. The perfect expression of thoughtfulness, presented in our signature keepsake box.",
    longDescription: "The Royal Heirloom Set pairs our signature dome huggies with a delicate pendant necklace, both finished in warm 18K gold plating. Presented in a velvet-lined keepsake box with a handwritten note card option. An heirloom-worthy gift for the woman who deserves to feel treasured.",
    rating: 4.9,
    reviewCount: 63,
    images: {
      primary: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      secondary: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    },
    variants: ["Gold", "Silver"],
    inStock: true,
  },
];

export const getProductBySlug = (slug) => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (currentProductId, limit = 4) => {
  return products
    .filter((p) => p.id !== currentProductId)
    .slice(0, limit);
};

export const categories = ["Earrings", "Necklaces", "Huggies"];
export const materials = ["Gold", "Silver"];
