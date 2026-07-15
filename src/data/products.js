export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    price: 42,
    material: '18K Gold Plated',
    toneOptions: ['Gold', 'Silver'],
    rating: 4.9,
    reviews: 126,
    shortDescription:
      'A sculptural gold ear cuff finished with a luminous crystal accent for an effortless stacked look.',
    description:
      'Designed for day-to-evening shine, this ear cuff hugs comfortably without a piercing and adds a refined flash of crystal light.',
    care:
      'Keep away from water, fragrance, and lotion. Store in the included soft pouch and polish gently with a dry jewelry cloth.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and in original packaging.',
    badge: 'Bestseller',
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    price: 68,
    material: '18K Gold Plated',
    toneOptions: ['Gold'],
    rating: 4.8,
    reviews: 98,
    shortDescription:
      'A delicate floral crystal necklace with soft color play and a golden adjustable chain.',
    description:
      'A feminine keepsake with multicolor crystal petals, made to layer beautifully or stand alone over silk, linen, and fine knits.',
    care:
      'Fasten the clasp before storing to avoid tangling. Keep the crystals bright by wiping gently after wear.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and in original packaging.',
    badge: 'Gift Pick',
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    price: 38,
    material: '18K Gold Plated',
    toneOptions: ['Gold', 'Silver'],
    rating: 5,
    reviews: 141,
    shortDescription:
      'Chunky gold dome huggies with a polished rounded profile and everyday comfort.',
    description:
      'A modern essential with just enough volume. These huggies bring a soft golden glow to workdays, weekends, and travel.',
    care:
      'Close the hinge before storage. Avoid repeated exposure to saltwater and chlorine to preserve the finish.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and in original packaging.',
    badge: 'Everyday Icon',
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    price: 54,
    material: '18K Gold Plated',
    toneOptions: ['Gold'],
    rating: 4.7,
    reviews: 83,
    shortDescription:
      'Textured gold filigree drop earrings with lace-like detail and warm movement.',
    description:
      'An editorial drop silhouette made for candlelit dinners, weddings, and any moment that asks for quiet drama.',
    care:
      'Store flat in a dry pouch and avoid crushing the filigree texture. Polish only with a soft dry cloth.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and in original packaging.',
    badge: 'Editorial',
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    price: 95,
    material: '18K Gold Plated',
    toneOptions: ['Gold'],
    rating: 4.9,
    reviews: 112,
    shortDescription:
      'A gift-boxed earring and necklace set with heirloom-inspired shine and modern ease.',
    description:
      'Created for gifting and self-celebration, this coordinated set arrives boxed and ready for the moments worth keeping.',
    care:
      'Store each piece separately in the gift box. Remove before sleeping, swimming, or applying perfume.',
    shipping:
      'Free worldwide shipping on every order. Returns are accepted within 30 days when pieces are unworn and in original packaging.',
    badge: 'Ready to Gift',
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Sculptural cuffs, drops, and luminous everyday pairs.',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layer-ready chains, crystal pendants, and soft golden details.',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Comfortable close-fit hoops with polished demi-fine volume.',
  },
]

export const ugcStories = [
  {
    id: 'soft-morning-stack',
    caption: 'A soft morning stack in warm gold.',
    title: 'Morning Stack',
  },
  {
    id: 'dinner-glow',
    caption: 'The earring that catches candlelight.',
    title: 'Dinner Glow',
  },
  {
    id: 'gift-unboxing',
    caption: 'Wrapped, opened, treasured.',
    title: 'Gift Moment',
  },
  {
    id: 'neckline-layer',
    caption: 'Delicate layers for a silk neckline.',
    title: 'Neckline Layer',
  },
  {
    id: 'weekend-huggies',
    caption: 'Polished huggies for every weekend plan.',
    title: 'Weekend Huggies',
  },
]

export const formatPrice = (price) => `$${price}`

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)
