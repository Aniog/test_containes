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
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true }
    ],
    inStock: true
  },
  {
    id: 2,
    name: "MAJESTIC FLORA NECTAR",
    slug: "majestic-flora-nectar",
    category: "Necklaces",
    price: 68,
    material: "Gold",
    description: "A multicolor floral crystal necklace that blooms with quiet elegance. Each crystal is carefully selected for its unique hue and brilliance.",
    longDescription: "The Majestic Flora Nectar necklace captures the delicate beauty of a garden in bloom. Featuring a curated arrangement of multicolor crystals set in 18K gold-plated brass, this piece is both statement-making and versatile. The adjustable chain allows for multiple styling options.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true }
    ],
    inStock: true
  },
  {
    id: 3,
    name: "GOLDEN SPHERE HUGGIES",
    slug: "golden-sphere-huggies",
    category: "Huggies",
    price: 38,
    material: "Gold",
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the everyday statement you've been looking for.",
    longDescription: "The Golden Sphere Huggies redefine the classic hoop. With their substantial dome shape and warm gold finish, these earrings make a confident statement while remaining comfortable enough for daily wear. The secure hinge closure ensures they stay in place from morning to night.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true }
    ],
    inStock: true
  },
  {
    id: 4,
    name: "AMBER LACE EARRINGS",
    slug: "amber-lace-earrings",
    category: "Earrings",
    price: 54,
    material: "Gold",
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that feels both timeless and modern.",
    longDescription: "The Amber Lace Earrings are a celebration of artisanal craftsmanship. Each pair features delicate filigree work that creates a lace-like pattern, catching light from every angle. The graceful drop silhouette elongates the neck and frames the face beautifully.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true }
    ],
    inStock: true
  },
  {
    id: 5,
    name: "ROYAL HEIRLOOM SET",
    slug: "royal-heirloom-set",
    category: "Necklaces",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring our signature crystal accents. The perfect present for someone special — or yourself.",
    longDescription: "The Royal Heirloom Set is our most cherished offering. This curated pairing includes a delicate crystal necklace and matching stud earrings, presented in a luxurious gift box. Each piece is crafted from 18K gold-plated brass with hypoallergenic posts. A timeless set designed to be treasured for years to come.",
    rating: 4.9,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
    ],
    variants: [
      { id: "gold", label: "Gold Tone", available: true },
      { id: "silver", label: "Silver Tone", available: true }
    ],
    inStock: true
  }
];

export const categories = ["Earrings", "Necklaces", "Huggies"];

export const materials = ["Gold", "Silver"];

export default products;
