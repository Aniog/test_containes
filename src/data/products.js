// Seed product data for Velmora Fine Jewelry.

export const products = [
  {
    id: "p1",
    slug: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    tone: "gold",
    rating: 4.8,
    reviewCount: 124,
    short:
      "A luminous gold ear cuff traced with a single crystal — quiet sparkle for every day.",
    description:
      "The Vivid Aura Jewels ear cuff is sculpted to follow the curve of the ear, finished in high-shine 18K gold plating and accented with a hand-set crystal. Lightweight enough for daily wear, bold enough to feel intentional.",
    materials:
      "18K gold-plated brass · AAA crystal · hypoallergenic, nickel-free post · designed in California, crafted by hand.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Each piece arrives in our signature cream linen gift box.",
    bestseller: true,
    imgIds: {
      primary: "vivid-aura-primary-7a1f",
      hover: "vivid-aura-hover-7a1f",
    },
    textIds: {
      section: "section-bestsellers-title",
      sectionSub: "section-bestsellers-subtitle",
      name: "p-vivid-aura-name",
      short: "p-vivid-aura-short",
    },
  },
  {
    id: "p2",
    slug: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    tone: "gold",
    rating: 4.9,
    reviewCount: 207,
    short:
      "A multicolor floral crystal pendant strung on a delicate 18K gold chain — heirloom energy.",
    description:
      "Inspired by botanical still-lifes, the Majestic Flora Nectar necklace gathers hand-set crystals in soft amber, blush and emerald tones around a sculpted gold bloom. Sits at the perfect collarbone length.",
    materials:
      "18K gold-plated brass · multicolor crystal · 18-inch cable chain with 2-inch extender · hypoallergenic and tarnish-resistant.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Packed in our cream linen gift box with a soft velvet pouch.",
    bestseller: true,
    imgIds: {
      primary: "majestic-flora-primary-3b8e",
      hover: "majestic-flora-hover-3b8e",
    },
    textIds: {
      section: "section-bestsellers-title",
      sectionSub: "section-bestsellers-subtitle",
      name: "p-majestic-flora-name",
      short: "p-majestic-flora-short",
    },
  },
  {
    id: "p3",
    slug: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    tone: "gold",
    rating: 4.7,
    reviewCount: 312,
    short:
      "Chunky, sculptural huggies in a polished gold dome — modern heirlooms, every day.",
    description:
      "A weighty, statement take on the classic huggie. The Golden Sphere Huggies are cast in a smooth gold dome that catches light from every angle, hinged for easy everyday wear.",
    materials:
      "18K gold-plated brass · hypoallergenic, nickel-free · secure hinge closure · designed in California.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Cream linen gift box included.",
    bestseller: true,
    imgIds: {
      primary: "golden-sphere-primary-9c4d",
      hover: "golden-sphere-hover-9c4d",
    },
    textIds: {
      section: "section-bestsellers-title",
      sectionSub: "section-bestsellers-subtitle",
      name: "p-golden-sphere-name",
      short: "p-golden-sphere-short",
    },
  },
  {
    id: "p4",
    slug: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    tone: "gold",
    rating: 4.8,
    reviewCount: 156,
    short:
      "Textured gold filigree drops with antique lacework detail — earrings that tell a story.",
    description:
      "Inspired by heirloom lace passed down through generations, the Amber Lace Earrings translate that intricate filigree into a modern drop silhouette. Slightly weighty, exceptionally refined.",
    materials:
      "18K gold-plated brass · intricate filigree casting · hypoallergenic, nickel-free · lever-back closure for secure fit.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Cream linen gift box included.",
    bestseller: true,
    imgIds: {
      primary: "amber-lace-primary-2f7a",
      hover: "amber-lace-hover-2f7a",
    },
    textIds: {
      section: "section-bestsellers-title",
      sectionSub: "section-bestsellers-subtitle",
      name: "p-amber-lace-name",
      short: "p-amber-lace-short",
    },
  },
  {
    id: "p5",
    slug: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "earrings",
    price: 95,
    tone: "gold",
    rating: 4.9,
    reviewCount: 89,
    short:
      "A gift-boxed earring and necklace set — the most-asked-for gift of the season.",
    description:
      "Two pieces designed to live together: a petite floral drop earring paired with a matching pendant on a fine cable chain. The Royal Heirloom Set arrives in our signature cream linen gift box, ready to give.",
    materials:
      "18K gold-plated brass · crystal accent · hypoallergenic, nickel-free · 18-inch chain with 2-inch extender.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns, no questions asked. Gift-ready cream linen box with hand-tied ribbon.",
    bestseller: true,
    imgIds: {
      primary: "royal-heirloom-primary-5e2c",
      hover: "royal-heirloom-hover-5e2c",
    },
    textIds: {
      section: "section-bestsellers-title",
      sectionSub: "section-bestsellers-subtitle",
      name: "p-royal-heirloom-name",
      short: "p-royal-heirloom-short",
    },
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== product.id)
    .filter((p) => p.category === product.category || p.tone === product.tone)
    .slice(0, limit);
}

export const categories = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
];

export const tones = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
];
