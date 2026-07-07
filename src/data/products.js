export const products = [
  {
    id: 'vel-001',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: '18k gold plated',
    tone: 'gold',
    rating: 4.8,
    reviews: 127,
    description:
      'A sculptural gold ear cuff illuminated by a single hand-set crystal accent. Designed to catch candlelight and compliments alike.',
    details:
      '18k gold-plated brass with a crystal accent. Nickel-free and hypoallergenic. Avoid direct contact with perfumes and lotions. Store in the provided pouch.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: true,
    image_query: 'gold ear cuff crystal accent jewelry on dark background',
  },
  {
    id: 'vel-002',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: '18k gold plated',
    tone: 'gold',
    rating: 4.9,
    reviews: 94,
    description:
      'A delicate floral pendant necklace with multicolor crystal petals strung on a fine gold chain. Romantic enough for evenings, refined enough for every day.',
    details:
      '18k gold-plated stainless steel chain with multicolor cubic zirconia. Length: 40 cm + 5 cm extender. Water-resistant; remove before swimming.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: true,
    image_query: 'multicolor floral crystal gold necklace on neutral background',
  },
  {
    id: 'vel-003',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: '18k gold plated',
    tone: 'gold',
    rating: 4.7,
    reviews: 215,
    description:
      'Chunky dome huggie earrings with a polished, mirror-like finish. The everyday pair that still feels like a statement.',
    details:
      '18k gold-plated brass with stainless steel posts. Diameter: 12 mm. Hypoallergenic and lightweight for all-day wear.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: true,
    image_query: 'chunky gold dome huggie earrings on dark background',
  },
  {
    id: 'vel-004',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: '18k gold plated',
    tone: 'gold',
    rating: 4.9,
    reviews: 88,
    description:
      'Textured filigree drop earrings inspired by vintage lace. Subtle movement and warm golden light make these a forever favorite.',
    details:
      'Intricate gold-plated filigree with surgical steel hooks. Length: 45 mm. Wipe gently with a soft cloth after wear.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: true,
    image_query: 'textured gold filigree drop earrings on neutral background',
  },
  {
    id: 'vel-005',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'mixed',
    tone: 'gold',
    rating: 5.0,
    reviews: 42,
    description:
      'A curated gift set of matching earrings and necklace, presented in a soft-touch Velmora box. The perfect ready-to-give treasure.',
    details:
      'Includes pendant necklace and stud earrings, both 18k gold-plated. Arrives in a Velmora gift box with a handwritten-style note card.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: true,
    image_query: 'gold jewelry gift set necklace earrings in elegant box',
  },
  {
    id: 'vel-006',
    name: 'Luna Pearl Studs',
    slug: 'luna-pearl-studs',
    price: 36,
    category: 'earrings',
    material: 'sterling silver',
    tone: 'silver',
    rating: 4.6,
    reviews: 156,
    description:
      'Minimal freshwater pearl studs set on sterling silver posts. Quiet elegance for morning coffee and midnight toasts.',
    details:
      'Sterling silver posts with freshwater cultured pearls. Nickel-free. Pearls are naturally unique; slight variations are part of their beauty.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: false,
    image_query: 'freshwater pearl stud earrings silver jewelry',
  },
  {
    id: 'vel-007',
    name: 'Sienna Chain Necklace',
    slug: 'sienna-chain-necklace',
    price: 52,
    category: 'necklaces',
    material: '18k gold plated',
    tone: 'gold',
    rating: 4.8,
    reviews: 73,
    description:
      'A refined paperclip chain with a sleek toggle closure. Layer it or let it shine on its own.',
    details:
      '18k gold-plated stainless steel. Length: 42 cm. Tarnish-resistant and shower-safe; dry thoroughly after water exposure.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: false,
    image_query: 'gold paperclip chain necklace on neutral background',
  },
  {
    id: 'vel-008',
    name: 'Tiny Huggie Trio',
    slug: 'tiny-huggie-trio',
    price: 44,
    category: 'huggies',
    material: '18k gold plated',
    tone: 'gold',
    rating: 4.7,
    reviews: 189,
    description:
      'A set of three petite huggies in varying textures. Mix, match, and stack along the ear for an effortless curated look.',
    details:
      'Set of three 18k gold-plated huggies. Inner diameter: 8 mm. Hinged closure for easy wear.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery 5–8 business days. Returns accepted within 30 days of delivery.',
    featured: false,
    image_query: 'three small gold huggie earrings set on dark background',
  },
]

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}

export function getRelatedProducts(currentSlug, limit = 4) {
  return products
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit)
}
