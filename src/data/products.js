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
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=675&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=675&fit=crop",
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
    description: "A statement necklace featuring a multicolor floral crystal pendant suspended on a delicate gold chain. A celebration of nature's beauty.",
    longDescription: "The Majestic Flora Nectar necklace captures the essence of a blooming garden. Each crystal petal is carefully selected and arranged to create a harmonious composition of color and light. Suspended from an 18K gold-plated chain, this piece makes a graceful statement.",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=675&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=675&fit=crop",
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
    description: "Chunky gold dome huggie earrings with a sculptural silhouette. Bold yet refined, these are the perfect everyday statement.",
    longDescription: "The Golden Sphere Huggies embody quiet confidence. Their domed silhouette is both architectural and organic, catching light from every angle. Crafted in 18K gold-plated brass with a secure hinged closure, they are as comfortable as they are striking.",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=675&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=675&fit=crop",
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
    description: "Textured gold filigree drop earrings with intricate lace-like detailing. A romantic silhouette that feels both vintage and modern.",
    longDescription: "The Amber Lace Earrings are a love letter to traditional craftsmanship. Each filigree detail is meticulously formed to create a delicate lace pattern that feels both timeless and contemporary. The drop silhouette adds graceful movement with every turn of the head.",
    rating: 4.6,
    reviewCount: 72,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=675&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=675&fit=crop",
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
    description: "A gift-boxed pairing of our signature earrings and necklace. Presented in a velvet-lined keepsake box, ready for gifting or self-treasuring.",
    longDescription: "The Royal Heirloom Set is our most cherished offering. This curated pairing includes a delicate pair of gold earrings and a matching pendant necklace, both nestled in a luxurious velvet-lined keepsake box. A timeless gift for someone you love—or yourself.",
    rating: 4.9,
    reviewCount: 63,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=675&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&h=675&fit=crop",
    ],
    variants: [
      { id: "gold", label: "Gold", available: true },
      { id: "silver", label: "Silver", available: true },
    ],
    inStock: true,
  },
]

export const categories = ["Earrings", "Necklaces", "Huggies"]

export const materials = ["Gold", "Silver"]

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug)
}

export function getRelatedProducts(currentId, limit = 4) {
  return products
    .filter(p => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
}
