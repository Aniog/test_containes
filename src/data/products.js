const baseProducts = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    badge: 'Bestseller',
    description: 'A sculptural gold ear cuff finished with a single crystal accent. Designed to sit comfortably along the ear without a piercing, it catches light with every turn.',
    materials: '18K gold-plated brass, cubic zirconia crystal. Nickel-free and hypoallergenic.',
    care: 'Avoid contact with perfume, lotion, and water. Store in a dry pouch and polish gently with a soft cloth.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    badge: 'New',
    description: 'A delicate necklace inspired by wildflower meadows, featuring multicolor floral crystals set along a fine gold chain. A statement of quiet romance.',
    materials: '18K gold-plated brass chain, hand-set colored crystals. Length: 40cm + 5cm extender.',
    care: 'Remove before showering or swimming. Keep away from harsh chemicals and store flat to prevent tangling.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 210,
    badge: null,
    description: 'Chunky dome huggies with a mirror-polished finish. Bold enough to stand alone, refined enough for everyday wear.',
    materials: '18K gold-plated brass with surgical steel posts. Lightweight and hypoallergenic.',
    care: 'Wipe clean after wear. Avoid sleeping or bathing in your huggies to preserve the plated finish.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 76,
    badge: 'Limited',
    description: 'Textured filigree drops that recall antique lace. Warm gold tone and intricate detailing make these an instant heirloom.',
    materials: '18K gold-plated brass, hand-cast filigree. Surgical steel hooks.',
    care: 'Handle with care to protect delicate detail. Store hanging or flat in a jewelry box.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 52,
    badge: 'Gift Set',
    description: 'A curated gift set pairing our signature earrings with a matching necklace, presented in a Velmora gift box. The perfect ready-to-give treasure.',
    materials: '18K gold-plated brass, cubic zirconia accents. Includes Velmora gift box and care card.',
    care: 'Keep pieces dry and stored separately in the provided pouch to avoid scratching.',
  },
]

const baseRelated = [
  {
    id: 'luna-pearl-huggies',
    name: 'Luna Pearl Huggies',
    slug: 'luna-pearl-huggies',
    price: 44,
    category: 'huggies',
    material: 'gold',
    rating: 4.6,
    reviewCount: 98,
    badge: null,
    description: 'Petite huggies with a luminous freshwater pearl drop. Equal parts modern and timeless.',
    materials: '18K gold-plated brass, freshwater pearl. Surgical steel posts.',
    care: 'Pearls are delicate; avoid water and perfume. Wipe gently after wear.',
  },
  {
    id: 'soleil-chain-necklace',
    name: 'Soleil Chain Necklace',
    slug: 'soleil-chain-necklace',
    price: 58,
    category: 'necklaces',
    material: 'gold',
    rating: 4.8,
    reviewCount: 134,
    badge: null,
    description: 'A fluid paperclip chain finished with a sunburst clasp. Layer it or let it shine solo.',
    materials: '18K gold-plated brass. Length: 42cm + 5cm extender.',
    care: 'Avoid moisture and store flat to prevent kinks.',
  },
  {
    id: 'velvet-gold-stud',
    name: 'Velvet Gold Stud',
    slug: 'velvet-gold-stud',
    price: 32,
    category: 'earrings',
    material: 'gold',
    rating: 4.7,
    reviewCount: 165,
    badge: null,
    description: 'Minimalist dome studs with a softly brushed gold finish. Your new everyday signature.',
    materials: '18K gold-plated brass, surgical steel posts.',
    care: 'Clean with a soft cloth and store in a dry place.',
  },
]

function enrichProduct(p) {
  const titleId = `product-title-${p.id}`
  const descId = `product-desc-${p.id}`
  const cleanName = p.name
  return {
    ...p,
    titleId,
    descId,
    imgId: `card-${p.id}`,
    altImgId: `card-${p.id}-alt`,
    cartImgId: `cart-${p.id}`,
    inStock: true,
    images: {
      hero: `[${titleId}] ${cleanName} gold jewelry product closeup editorial`,
      alt: `[${titleId}] ${cleanName} gold jewelry worn on model editorial`,
    },
    cartImage: `${cleanName} gold jewelry product closeup editorial`,
  }
}

export const products = baseProducts.map(enrichProduct)
export const relatedProducts = baseRelated.map(enrichProduct)
export const allProducts = [...products, ...relatedProducts]

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug) || null
}

export function getRelatedProducts(excludeSlug, limit = 3) {
  return allProducts
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit)
}
