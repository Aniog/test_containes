// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: "A sculptural ear cuff adorned with a single crystal accent. Minimal yet striking, designed to catch the light with every turn.",
    shortDescription: "Gold ear cuff with crystal accent",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      { id: "gold", url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80", alt: "Vivid Aura Jewels in gold" },
      { id: "silver", url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80", alt: "Vivid Aura Jewels in silver" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: "A delicate necklace featuring a cluster of multicolor floral crystals. Each stone is hand-selected for its unique hue and brilliance.",
    shortDescription: "Multicolor floral crystal necklace",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      { id: "gold", url: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", alt: "Majestic Flora Nectar in gold" },
      { id: "silver", url: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80", alt: "Majestic Flora Nectar in silver" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: "Chunky dome huggies with a soft matte finish. The perfect everyday statement that feels both modern and timeless.",
    shortDescription: "Chunky gold dome huggie earrings",
    material: "18K Gold Plated Brass",
    images: [
      { id: "gold", url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", alt: "Golden Sphere Huggies in gold" },
      { id: "silver", url: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80", alt: "Golden Sphere Huggies in silver" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    rating: 4.6,
    reviewCount: 72,
    description: "Intricate filigree drop earrings with a textured gold finish. Inspired by vintage lacework, reimagined for the modern woman.",
    shortDescription: "Textured gold filigree drop earrings",
    material: "18K Gold Plated Brass",
    images: [
      { id: "gold", url: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80", alt: "Amber Lace Earrings in gold" },
      { id: "silver", url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80", alt: "Amber Lace Earrings in silver" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    rating: 4.9,
    reviewCount: 63,
    description: "A curated gift set featuring a matching pair of delicate earrings and a pendant necklace. Presented in a velvet-lined keepsake box.",
    shortDescription: "Gift-boxed earring + necklace set",
    material: "18K Gold Plated Brass, Crystal",
    images: [
      { id: "gold", url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80", alt: "Royal Heirloom Set in gold" },
      { id: "silver", url: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80", alt: "Royal Heirloom Set in silver" }
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true }
    ],
    inStock: true
  }
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["18K Gold Plated", "Crystal"];

export default products;
