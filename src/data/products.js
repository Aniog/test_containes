// Seed product data for Velmora Fine Jewelry

export const products = [
  {
    id: 1,
    name: "VIVID AURA JEWELS",
    slug: "vivid-aura-jewels",
    category: "Earrings",
    price: 42,
    material: "Gold",
    description: "A delicate gold ear cuff adorned with a single crystal accent. Designed to catch the light with every movement, this piece adds a subtle shimmer to your everyday look.",
    longDescription: "The Vivid Aura Jewels ear cuff is a study in refined minimalism. Handcrafted from 18K gold-plated brass, it features a single faceted crystal that refracts light beautifully. Lightweight and comfortable for all-day wear, this piece transitions effortlessly from day to evening.",
    rating: 4.8,
    reviewCount: 124,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A multicolor floral crystal necklace that blooms with elegance. Each petal is carefully set with vibrant crystals in a delicate gold setting.",
    longDescription: "The Majestic Flora Nectar necklace captures the ephemeral beauty of a blooming flower. Featuring a cluster of hand-selected crystals in warm and cool tones, this piece is suspended from a fine 18K gold-plated chain. Adjustable length allows for versatile styling.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these huggies make a statement without overwhelming.",
    longDescription: "The Golden Sphere Huggies are a modern interpretation of the classic hoop. Featuring a substantial dome shape with a brushed gold finish, these earrings add architectural interest to any ensemble. Secure hinged closure ensures comfort and peace of mind.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that catches the light from every angle.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work. Each earring is meticulously crafted with delicate gold threads forming an intricate lace pattern. The warm amber-hued crystals at the center add a touch of vintage glamour to this timeless design.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring matching crystal accents. The perfect present for someone special—or yourself.",
    longDescription: "The Royal Heirloom Set is our signature gift collection. This coordinated set includes a delicate pendant necklace and matching stud earrings, each featuring a single faceted crystal in a refined gold setting. Presented in a luxurious velvet-lined gift box, this set is designed to be treasured for years to come.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["Gold", "Silver"];

export default products;
