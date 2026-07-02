export const products = [
  {
    id: 1,
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    material: "gold",
    rating: 4.8,
    reviewCount: 124,
    description: "A sculptural ear cuff featuring a delicate crystal accent that catches the light with every movement. Designed to sit gracefully along the ear's natural curve.",
    shortDescription: "Gold ear cuff with crystal accent",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 2,
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    price: 68,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviewCount: 89,
    description: "A romantic necklace adorned with hand-selected multicolor crystals arranged in a delicate floral motif. Suspended from a fine 18K gold-plated chain.",
    shortDescription: "Multicolor floral crystal necklace",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 3,
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    price: 38,
    category: "huggies",
    material: "gold",
    rating: 4.7,
    reviewCount: 156,
    description: "Bold yet refined dome huggies with a softly rounded silhouette. The perfect everyday statement that feels both modern and timeless.",
    shortDescription: "Chunky gold dome huggie earrings",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
  {
    id: 4,
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    price: 54,
    category: "earrings",
    material: "gold",
    rating: 4.6,
    reviewCount: 72,
    description: "Intricately textured filigree drops inspired by vintage lacework. Each pair is finished with a warm golden patina that deepens over time.",
    shortDescription: "Textured gold filigree drop earrings",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
    ],
    variants: ["gold"],
    inStock: true,
  },
  {
    id: 5,
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    price: 95,
    category: "necklaces",
    material: "gold",
    rating: 4.9,
    reviewCount: 63,
    description: "A curated pairing of our signature huggies and a delicate pendant necklace, presented in a keepsake gift box. The ultimate expression of considered gifting.",
    shortDescription: "Gift-boxed earring + necklace set",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
    ],
    variants: ["gold", "silver"],
    inStock: true,
  },
];

export const categories = [
  { id: "earrings", label: "Earrings", count: 2 },
  { id: "necklaces", label: "Necklaces", count: 2 },
  { id: "huggies", label: "Huggies", count: 1 },
];

export const materials = ["gold", "silver"];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(currentId, limit = 4) {
  return products
    .filter((p) => p.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}
