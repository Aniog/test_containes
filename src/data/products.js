// Seed product catalogue for Velmora Fine Jewelry.
// Images use the strk-img system (data-strk-img) so they resolve to warm
// gold-jewelry editorial photography at runtime.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'ear cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — no piercing required, effortless from day to evening.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension, finished in 18K gold plate over sterling silver. A hand-set crystal catches the light with every turn. Designed to be worn alone or stacked.',
    materials:
      '18K gold plate over 925 sterling silver. Hand-set cubic zirconia crystal. Nickel-free, lead-free, hypoallergenic.',
    care: 'Avoid contact with water, perfume and lotion. Store in the provided pouch. Polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
    imgId: 'prod-vivid-aura-a1',
    imgIdAlt: 'prod-vivid-aura-b2',
    titleId: 'prod-vivid-aura-title',
    descId: 'prod-vivid-aura-desc',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'pendant necklace',
    price: 68,
    rating: 4.9,
    reviews: 203,
    shortDescription:
      'A multicolor floral crystal pendant suspended from a delicate gold chain — a wearable garden in bloom.',
    description:
      'Majestic Flora Nectar centres on a floral cluster of multicolor crystals, each petal set by hand and framed in warm gold plate. The adjustable chain wears beautifully alone or layered with finer chains.',
    materials:
      '18K gold plate over 925 sterling silver. Multicolor cubic zirconia crystals. Nickel-free, lead-free, hypoallergenic.',
    care: 'Keep dry and away from perfumes. Store flat in the provided box to protect the crystals.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold'],
    tags: ['bestseller'],
    imgId: 'prod-majestic-flora-a1',
    imgIdAlt: 'prod-majestic-flora-b2',
    titleId: 'prod-majestic-flora-title',
    descId: 'prod-majestic-flora-desc',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'huggie earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    shortDescription:
      'Chunky gold dome huggies that sit close to the lobe — everyday polish with a quiet statement.',
    description:
      'The Golden Sphere huggies are polished to a smooth dome, hugging the lobe with a secure hinged closure. Their rounded silhouette adds warmth and structure to any ear stack.',
    materials:
      '18K gold plate over 925 sterling silver. Hinged snap closure. Nickel-free, lead-free, hypoallergenic.',
    care: 'Wipe clean with a soft cloth after wear. Keep dry to preserve the gold plate.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold', 'Silver'],
    tags: ['bestseller'],
    imgId: 'prod-golden-sphere-a1',
    imgIdAlt: 'prod-golden-sphere-b2',
    titleId: 'prod-golden-sphere-title',
    descId: 'prod-golden-sphere-desc',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'drop earrings',
    price: 54,
    rating: 4.8,
    reviews: 91,
    shortDescription:
      'Textured gold filigree drop earrings — openwork lace rendered in warm metal, light as air.',
    description:
      'Amber Lace reimagines traditional filigree as a modern drop earring. The openwork pattern moves gently, catching warm light through its textured gold surface.',
    materials:
      '18K gold plate over 925 sterling silver. Textured filigree. Nickel-free, lead-free, hypoallergenic.',
    care: 'Handle with care to protect the filigree. Store in the provided box. Polish with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold'],
    tags: ['bestseller'],
    imgId: 'prod-amber-lace-a1',
    imgIdAlt: 'prod-amber-lace-b2',
    titleId: 'prod-amber-lace-title',
    descId: 'prod-amber-lace-desc',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    type: 'earring + necklace set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    shortDescription:
      'A gift-boxed earring and necklace set — coordinated elegance, ready to give and to treasure.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented pendant necklace with matching drop earrings, presented in a signature Velmora gift box. A complete, coordinated look for gifting or self-purchase.',
    materials:
      '18K gold plate over 925 sterling silver. Hand-set cubic zirconia crystals. Nickel-free, lead-free, hypoallergenic.',
    care: 'Store each piece separately in the gift box. Avoid water and perfume. Polish with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 1–2 business days. 30-day returns on unworn pieces in original packaging.',
    variants: ['Gold'],
    tags: ['bestseller'],
    imgId: 'prod-royal-heirloom-a1',
    imgIdAlt: 'prod-royal-heirloom-b2',
    titleId: 'prod-royal-heirloom-title',
    descId: 'prod-royal-heirloom-desc',
  },
]

export const categories = [
  {
    id: 'Earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops and statement studs.',
    imgId: 'cat-earrings-a1',
  },
  {
    id: 'Necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains and layered pieces.',
    imgId: 'cat-necklaces-a1',
  },
  {
    id: 'Huggies',
    name: 'Huggies',
    description: 'Close-fit hoops for everyday polish.',
    imgId: 'cat-huggies-a1',
  },
]

export const testimonials = [
  {
    id: 't1',
    name: 'Sofia M.',
    rating: 5,
    text: 'The gold is so warm and the weight feels real. I wear my huggies every single day — they have not tarnished once.',
  },
  {
    id: 't2',
    name: 'Amara K.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift and it arrived in the most beautiful box. My mother cried. Truly special.',
  },
  {
    id: 't3',
    name: 'Elena R.',
    rating: 5,
    text: 'I have sensitive ears and these are the first earrings I can wear all day with zero irritation. Stunning quality for the price.',
  },
]

export const reels = [
  {
    id: 'r1',
    caption: 'Golden Sphere Huggies, every day.',
    imgId: 'reel-huggies-a1',
    titleId: 'reel-huggies-title',
  },
  {
    id: 'r2',
    caption: 'Majestic Flora, layered.',
    imgId: 'reel-flora-a1',
    titleId: 'reel-flora-title',
  },
  {
    id: 'r3',
    caption: 'Vivid Aura ear cuff, stacked.',
    imgId: 'reel-aura-a1',
    titleId: 'reel-aura-title',
  },
  {
    id: 'r4',
    caption: 'Amber Lace, evening light.',
    imgId: 'reel-lace-a1',
    titleId: 'reel-lace-title',
  },
  {
    id: 'r5',
    caption: 'Royal Heirloom, unboxed.',
    imgId: 'reel-heirloom-a1',
    titleId: 'reel-heirloom-title',
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (id, limit = 4) =>
  products.filter((p) => p.id !== id).slice(0, limit)

export const formatPrice = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value)
