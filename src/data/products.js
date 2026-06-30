export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    rating: 4.8,
    reviews: 124,
    category: 'earrings',
    material: 'gold',
    description: 'A sculptural gold ear cuff illuminated by a single hand-set crystal. Designed to catch candlelight and compliments in equal measure.',
    details: '18k gold-plated brass. Hand-set cubic zirconia accent. Hypoallergenic, nickel-free. Cuff diameter approx. 11mm; no piercing required.',
    care: 'Store in a dry pouch. Avoid contact with perfume, lotion, and water. Clean gently with a soft cloth to preserve the gold finish.',
    images: 4,
    related: ['golden-sphere-huggies', 'amber-lace-earrings', 'royal-heirloom-set'],
    isBestseller: true,
    tone: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    rating: 4.9,
    reviews: 89,
    category: 'necklaces',
    material: 'gold',
    description: 'A delicate necklace featuring multicolor floral crystals clustered along a fine gold chain. The perfect balance of playful and polished.',
    details: '18k gold-plated brass chain with hand-painted enamel and crystal flowers. Length 16" with 2" extender. Lobster clasp closure.',
    care: 'Avoid water and harsh chemicals. Lay flat to store and prevent tangling.',
    images: 4,
    related: ['royal-heirloom-set', 'amber-lace-earrings', 'vivid-aura-jewels'],
    isBestseller: true,
    tone: ['gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    rating: 4.7,
    reviews: 213,
    category: 'huggies',
    material: 'gold',
    description: 'Chunky dome huggies with a liquid-gold finish. Lightweight enough for everyday wear, bold enough to elevate any evening look.',
    details: '18k gold-plated stainless steel. Hollow construction for comfort. Hinge closure. Diameter 14mm, width 7mm.',
    care: 'Wipe with a soft cloth after wear. Keep dry and away from abrasive surfaces.',
    images: 4,
    related: ['vivid-aura-jewels', 'amber-lace-earrings', 'majestic-flora-nectar'],
    isBestseller: true,
    tone: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    rating: 4.9,
    reviews: 76,
    category: 'earrings',
    material: 'gold',
    description: 'Textured gold filigree drops inspired by vintage lacework. Elegant movement and warm tone make them a forever favorite.',
    details: '18k gold-plated brass with intricate filigree detailing. Drop length 38mm. Surgical steel posts.',
    care: 'Store hanging or flat. Avoid moisture and perfume to protect the plated finish.',
    images: 4,
    related: ['majestic-flora-nectar', 'royal-heirloom-set', 'vivid-aura-jewels'],
    isBestseller: true,
    tone: ['gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    rating: 5.0,
    reviews: 52,
    category: 'sets',
    material: 'gold',
    description: 'A curated gift set of coordinating earrings and necklace, packaged in a signature Velmora box ready for giving.',
    details: 'Includes the Golden Sphere Huggies and a matching pendant necklace. 18k gold-plated, hypoallergenic. Signature gift box and care card included.',
    care: 'Keep pieces stored separately in the provided pouch. Clean with a soft cloth.',
    images: 4,
    related: ['majestic-flora-nectar', 'amber-lace-earrings', 'golden-sphere-huggies'],
    isBestseller: true,
    tone: ['gold'],
  },
]

export const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
]

export const ugcPosts = [
  { id: 'ugc-1', caption: 'everyday gold' },
  { id: 'ugc-2', caption: 'layered & loved' },
  { id: 'ugc-3', caption: 'self-gifted' },
  { id: 'ugc-4', caption: 'date night' },
  { id: 'ugc-5', caption: 'minimal glow' },
  { id: 'ugc-6', caption: 'morning ritual' },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Amelia K.',
    text: 'The quality is exceptional for the price. My huggies still look new after months of daily wear.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sofia M.',
    text: 'Quiet luxury exactly as promised. The packaging alone made me feel like I was unboxing something truly special.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Danielle R.',
    text: 'Bought the heirloom set as a gift and ended up ordering one for myself. Truly timeless.',
    rating: 5,
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(ids) {
  return products.filter((p) => ids.includes(p.id))
}
