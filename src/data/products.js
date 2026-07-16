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
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
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
    description: "A statement necklace featuring a cascade of multicolor floral crystals. Each stone is carefully selected and set to create a piece that feels both timeless and contemporary.",
    longDescription: "The Majestic Flora Nectar necklace is inspired by the delicate beauty of wildflowers. A cluster of hand-selected crystals in warm amber, soft rose, and clear tones are suspended from an 18K gold-plated chain. Adjustable length allows for versatile styling.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these earrings make a confident statement while remaining comfortable for daily wear.",
    longDescription: "The Golden Sphere Huggies are our most beloved everyday piece. Cast in 18K gold-plated brass with a polished dome finish, these earrings have a substantial feel without the weight. The secure hinge closure ensures they stay in place from morning coffee to evening events.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
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
    description: "Textured gold filigree drop earrings with an intricate lace-like pattern. Each pair is individually finished to highlight the delicate craftsmanship.",
    longDescription: "The Amber Lace Earrings showcase the artistry of traditional filigree work. Delicate gold threads are woven into an organic, lace-inspired pattern that catches light from every angle. The warm amber tone of the gold plating complements all skin tones beautifully.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
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
    description: "A curated gift-boxed set featuring a matching earring and necklace pairing. Presented in our signature velvet box, this set makes an unforgettable gift for someone special.",
    longDescription: "The Royal Heirloom Set is our signature offering for those who appreciate the art of gifting. This thoughtfully curated pairing includes our signature huggie earrings and a delicate pendant necklace, both crafted in 18K gold-plated brass. Arrives in a keepsake velvet box with a handwritten note card option.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
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
