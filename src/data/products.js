export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviews: 126,
    description:
      'A sculptural gold ear cuff finished with a light-catching crystal accent for effortless everyday polish.',
    details:
      'Designed for a no-piercing stacked look, Vivid Aura Jewels brings a refined glint to soft knits, silk slips, and evening tailoring.',
    care: '18K gold plated brass with crystal accent. Keep dry, store separately, and polish gently with a soft cloth after wear.',
    shipping: 'Free worldwide shipping on every order. Easy 30-day returns in original condition.',
    imageId: 'product-vivid-aura-primary-8f2a9c',
    hoverImageId: 'product-vivid-aura-hover-3d7c11',
    galleryIds: ['product-vivid-aura-gallery-1', 'product-vivid-aura-gallery-2', 'product-vivid-aura-gallery-3'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: '18K Gold Plated',
    price: 68,
    rating: 4.8,
    reviews: 98,
    description:
      'A delicate floral crystal necklace with soft multicolor shimmer, made for gifting and heirloom-inspired layering.',
    details:
      'A feminine pendant that catches warm light with painterly crystal tones, set on an adjustable gold-plated chain.',
    care: '18K gold plated brass with multicolor crystal details. Avoid fragrance, water, and lotions to preserve the finish.',
    shipping: 'Free worldwide shipping on every order. Easy 30-day returns in original condition.',
    imageId: 'product-flora-primary-6a4e1d',
    hoverImageId: 'product-flora-hover-51c9ab',
    galleryIds: ['product-flora-gallery-1', 'product-flora-gallery-2', 'product-flora-gallery-3'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviews: 184,
    description:
      'Chunky dome huggie earrings with a smooth golden curve that feels substantial yet wearable from morning to midnight.',
    details:
      'Our most-loved huggie silhouette, softly rounded for comfortable daily wear and polished enough for an evening stack.',
    care: '18K gold plated brass with hypoallergenic posts. Store in the pouch between wears and avoid swimming or showering.',
    shipping: 'Free worldwide shipping on every order. Easy 30-day returns in original condition.',
    imageId: 'product-sphere-primary-d4b820',
    hoverImageId: 'product-sphere-hover-a9117f',
    galleryIds: ['product-sphere-gallery-1', 'product-sphere-gallery-2', 'product-sphere-gallery-3'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 54,
    rating: 4.7,
    reviews: 73,
    description:
      'Textured gold filigree drop earrings with airy movement and a vintage-inspired lace finish.',
    details:
      'Lightweight and luminous, Amber Lace Earrings are crafted for dinner dates, ceremonies, and elevated everyday moments.',
    care: '18K gold plated brass. Wipe clean with a dry jewelry cloth and keep away from moisture and abrasive surfaces.',
    shipping: 'Free worldwide shipping on every order. Easy 30-day returns in original condition.',
    imageId: 'product-amber-primary-c8e2f0',
    hoverImageId: 'product-amber-hover-ff12d8',
    galleryIds: ['product-amber-gallery-1', 'product-amber-gallery-2', 'product-amber-gallery-3'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviews: 112,
    description:
      'A gift-boxed earring and necklace set with a refined golden finish and quietly romantic presence.',
    details:
      'Curated for effortless gifting, this set pairs a delicate pendant necklace with luminous matching earrings in our signature box.',
    care: '18K gold plated brass with crystal details. Store each piece separately and polish gently after wear.',
    shipping: 'Free worldwide shipping on every order. Easy 30-day returns in original condition.',
    imageId: 'product-heirloom-primary-0a66eb',
    hoverImageId: 'product-heirloom-hover-742c4a',
    galleryIds: ['product-heirloom-gallery-1', 'product-heirloom-gallery-2', 'product-heirloom-gallery-3'],
  },
]

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Light-catching drops, cuffs, and refined everyday silhouettes.',
    imageId: 'category-earrings-9af3d1',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Delicate chains and crystal pendants for gifting or layering.',
    imageId: 'category-necklaces-250bca',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Comfortable golden curves made to stack beautifully.',
    imageId: 'category-huggies-19d0ee',
  },
]

export const ugcItems = [
  { id: 'morning-stack', caption: 'The morning stack', imageId: 'ugc-morning-stack-11a7b6' },
  { id: 'golden-hour', caption: 'Golden hour glow', imageId: 'ugc-golden-hour-53ef20' },
  { id: 'soft-layering', caption: 'Soft necklace layers', imageId: 'ugc-soft-layering-c934aa' },
  { id: 'gifted-moment', caption: 'A gifted moment', imageId: 'ugc-gifted-moment-449fde' },
  { id: 'dinner-huggies', caption: 'Dinner in huggies', imageId: 'ugc-dinner-huggies-c8b91d' },
]

export const testimonials = [
  {
    quote: 'The Golden Sphere Huggies feel so much more expensive than they are. I wear them almost every day.',
    name: 'Maya R.',
  },
  {
    quote: 'Packaging was beautiful and the necklace had that understated sparkle I wanted for a birthday gift.',
    name: 'Leah M.',
  },
  {
    quote: 'Warm, polished, and easy to style. Velmora has become my go-to for little luxuries.',
    name: 'Sofia K.',
  },
]

export const formatPrice = (price) => `$${price}`
