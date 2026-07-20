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
      { id: "img1", alt: "Vivid Aura Jewels ear cuff on model" },
      { id: "img2", alt: "Vivid Aura Jewels ear cuff detail view" },
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
    description: "A multicolor floral crystal necklace that blooms with elegance. Each crystal is carefully selected and set to create a piece that feels both timeless and contemporary.",
    longDescription: "The Majestic Flora Nectar necklace captures the delicate beauty of a garden in bloom. Featuring a curated arrangement of multicolor crystals set in 18K gold-plated brass, this necklace is suspended from a fine chain that adjusts to your preferred length. A statement piece that remains refined.",
    rating: 4.9,
    reviewCount: 87,
    images: [
      { id: "img1", alt: "Majestic Flora Nectar necklace on model" },
      { id: "img2", alt: "Majestic Flora Nectar necklace detail" },
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet wearable, these huggies make a confident statement with their rounded, architectural form.",
    longDescription: "The Golden Sphere Huggies are a modern classic. Cast in 18K gold-plated brass, these dome-shaped huggies feature a substantial yet comfortable profile. The secure hinge closure ensures they stay in place throughout your day, while the polished finish reflects light with every turn of the head.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      { id: "img1", alt: "Golden Sphere Huggies on model" },
      { id: "img2", alt: "Golden Sphere Huggies close-up" },
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
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. Each piece is a miniature work of art, showcasing the delicate craftsmanship of traditional filigree work.",
    longDescription: "The Amber Lace Earrings celebrate the ancient art of filigree. Handcrafted from 18K gold-plated brass, these drop earrings feature an intricate openwork pattern that allows light to filter through. The warm gold tone and delicate proportions make them a versatile addition to any jewelry collection.",
    rating: 4.6,
    reviewCount: 92,
    images: [
      { id: "img1", alt: "Amber Lace Earrings on model" },
      { id: "img2", alt: "Amber Lace Earrings detail view" },
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
    category: "Earrings",
    price: 95,
    material: "Gold",
    description: "A gift-boxed earring and necklace set featuring coordinated pieces. Perfect for gifting or treating yourself to a complete look that feels both special and cohesive.",
    longDescription: "The Royal Heirloom Set is our signature gift collection. This coordinated pairing includes a delicate pair of drop earrings and a matching pendant necklace, both crafted in 18K gold-plated brass. Presented in a premium gift box with a handwritten note card, this set is designed to be treasured and passed down.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      { id: "img1", alt: "Royal Heirloom Set in gift box" },
      { id: "img2", alt: "Royal Heirloom Set worn on model" },
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
