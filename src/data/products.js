export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 126,
    description:
      'A sculptural gold ear cuff finished with a crystalline accent for an effortless stacked-ear moment.',
    details:
      'Designed to slip comfortably along the ear without piercing. Polished by hand for a soft golden glow that layers beautifully with studs and huggies.',
    care:
      'Keep dry, store in the Velmora pouch, and polish gently with a soft cloth after wear.',
    tags: ['ear cuff', 'crystal', 'giftable'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: '18K Gold Plated',
    rating: 4.8,
    reviewCount: 98,
    description:
      'A delicate floral crystal necklace with softly colored stones and a refined gold chain.',
    details:
      'A luminous pendant inspired by pressed botanicals, made for open necklines, bridal gifting, and everyday romance.',
    care:
      'Avoid perfume and lotions directly on the piece. Store flat to protect the pendant setting.',
    tags: ['floral', 'crystal', 'necklace'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 182,
    description:
      'Chunky gold dome huggies that feel modern, polished, and comfortable from desk to dinner.',
    details:
      'Lightweight hollow domes with a secure hinge closure. The softly rounded profile catches the light from every angle.',
    care:
      'Wipe clean after wear and keep separate from harder gemstones to preserve the polished finish.',
    tags: ['huggies', 'chunky', 'everyday'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: '18K Gold Plated',
    rating: 4.7,
    reviewCount: 74,
    description:
      'Textured filigree drop earrings with warm movement and a subtle antique-inspired finish.',
    details:
      'Fine openwork details create dimension without heaviness, making these drops an elevated choice for evenings and gifting.',
    care:
      'Store hanging or flat in a dry pouch. Avoid sleeping, swimming, or exercising in drop earrings.',
    tags: ['drop earrings', 'filigree', 'occasion'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    price: 95,
    material: '18K Gold Plated',
    rating: 5,
    reviewCount: 211,
    description:
      'A gift-boxed earring and necklace set with heirloom-inspired shine and everyday ease.',
    details:
      'Curated as a ready-to-give pairing with complementary proportions, packaged in our signature keepsake box.',
    care:
      'Keep each piece in its separate pouch compartment and polish gently before placing back in the box.',
    tags: ['gift set', 'necklace', 'earrings'],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    caption: 'Light-catching silhouettes for every invitation.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    caption: 'Soft focal points for bare skin and fine knits.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    caption: 'Comfort-first gold hoops made for daily rituals.',
  },
]

export const ugcMoments = [
  {
    id: 'morning-stack',
    title: 'The morning stack',
    caption: 'Gold huggies layered with a silk button-down.',
  },
  {
    id: 'soft-evening',
    title: 'Soft evening light',
    caption: 'A floral pendant catching candlelight.',
  },
  {
    id: 'gift-unboxing',
    title: 'Gifted in gold',
    caption: 'Our signature box, ready for her nightstand.',
  },
  {
    id: 'weekend-glow',
    title: 'Weekend glow',
    caption: 'Crystal ear cuffs worn with natural texture.',
  },
  {
    id: 'quiet-dinner',
    title: 'Quiet dinner shine',
    caption: 'Filigree drops against a deep espresso dress.',
  },
]

export const testimonials = [
  {
    id: 'amelia',
    quote: 'The Golden Sphere Huggies look far more expensive than they are. I wear them almost daily.',
    name: 'Amelia R.',
  },
  {
    id: 'nina',
    quote: 'I bought the Heirloom Set for my sister and the packaging made it feel incredibly special.',
    name: 'Nina L.',
  },
  {
    id: 'maris',
    quote: 'Elegant, warm, and never too flashy. Velmora has become my go-to for gifts.',
    name: 'Maris T.',
  },
]

export const formatPrice = (price) => `$${price}`
