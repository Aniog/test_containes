export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    material: '18K Gold Plated',
    price: 42,
    rating: 4.9,
    reviewCount: 128,
    shortDescription: 'Gold ear cuff with a crystalline glint for everyday polish.',
    hoverImageDescription:
      'editorial close-up of a gold ear cuff with crystal accents in warm lamplight',
    description:
      'A modern ear cuff that catches the light from every angle. Vivid Aura Jewels is designed for effortless stacking, gifting, and the kind of everyday luxury that still feels special.',
    materialsCare:
      '18K gold plated brass with handset crystal accents. Store dry, avoid perfumes and water, and polish gently with a soft cloth after wear.',
    shippingReturns:
      'Complimentary worldwide shipping on orders over $75. Returns accepted within 30 days in original packaging.',
    accentLine: 'Delicate sparkle, sculpted to frame the ear.',
    galleryViews: [
      'close portrait of a woman wearing a single gold crystal ear cuff',
      'editorial side profile of gold ear cuff layered with small hoops',
      'gold ear cuff resting on warm stone with soft directional lighting',
      'luxury jewelry box styling of a gold ear cuff and crystal detail',
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    material: 'Gold Vermeil',
    price: 68,
    rating: 4.8,
    reviewCount: 94,
    shortDescription: 'A multicolor floral crystal necklace with luminous depth.',
    hoverImageDescription:
      'close-up of a gold floral crystal necklace layered over a silk blouse',
    description:
      'Majestic Flora Nectar blends a fine gold chain with floral crystal tones for a romantic finish. It is light enough for daily wear and polished enough for dinner reservations and gifting moments alike.',
    materialsCare:
      'Gold vermeil chain with faceted crystal florals. Keep away from moisture and lotions, then store flat in the Velmora pouch to preserve shine.',
    shippingReturns:
      'Complimentary worldwide shipping on orders over $75. Returns accepted within 30 days in original packaging.',
    accentLine: 'A soft statement piece with a modern heirloom mood.',
    galleryViews: [
      'editorial portrait of a woman wearing a floral crystal necklace in warm light',
      'flat lay of a gold floral necklace on ivory silk and ribbon',
      'close detail of multicolor crystals set in a gold necklace',
      'gift-ready gold necklace in a luxury jewelry box with tissue paper',
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    material: '18K Gold Plated',
    price: 38,
    rating: 4.9,
    reviewCount: 211,
    shortDescription: 'Chunky gold dome huggies with a smooth sculptural finish.',
    hoverImageDescription:
      'close-up of chunky gold dome huggie earrings on an ear in warm studio light',
    description:
      'Golden Sphere Huggies are your instant finishing piece: rounded, substantial, and endlessly wearable. They bring an editorial edge without ever feeling overdone.',
    materialsCare:
      '18K gold plated brass with a secure hinged clasp. Avoid abrasion and wipe clean after wear to keep the dome finish bright.',
    shippingReturns:
      'Complimentary worldwide shipping on orders over $75. Returns accepted within 30 days in original packaging.',
    accentLine: 'Minimal, polished, and quietly bold.',
    galleryViews: [
      'close-up of dome huggie earrings worn with slicked-back hair',
      'pair of chunky gold huggies on warm neutral stone pedestal',
      'editorial jewelry tray featuring gold huggie earrings and silk ribbon',
      'gift box reveal of gold huggie earrings with velvet lining',
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    material: 'Gold Vermeil',
    price: 54,
    rating: 4.7,
    reviewCount: 76,
    shortDescription: 'Textured gold filigree drops with airy movement and glow.',
    hoverImageDescription:
      'warm-lit portrait featuring filigree gold drop earrings against dark background',
    description:
      'Amber Lace Earrings pair textured filigree detailing with a fluid drop silhouette. The result is feminine, luminous, and designed to elevate everything from knitwear to evening tailoring.',
    materialsCare:
      'Gold vermeil filigree drops with lightweight comfort backs. Keep away from water and store in the included pouch when not in use.',
    shippingReturns:
      'Complimentary worldwide shipping on orders over $75. Returns accepted within 30 days in original packaging.',
    accentLine: 'Intricate texture, refined for daily romance.',
    galleryViews: [
      'close-up of textured gold filigree earrings worn with a black dress',
      'editorial flat lay of filigree earrings on porcelain tray',
      'detailed macro image of gold lace earring texture in warm light',
      'gift styling of ornate gold earrings beside velvet ribbon',
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Gift Sets',
    material: '18K Gold Plated',
    price: 95,
    rating: 5,
    reviewCount: 58,
    shortDescription: 'Gift-boxed earring and necklace pairing made for the occasion.',
    hoverImageDescription:
      'luxury gift set with gold earrings and necklace arranged in a velvet box',
    description:
      'The Royal Heirloom Set arrives ready to gift, pairing a delicate necklace with matching earrings in Velmora’s signature presentation box. It is our go-to pick for milestone moments and self-spoiling rituals.',
    materialsCare:
      '18K gold plated brass set with matching chain and earrings. Store pieces separately inside the box compartments to avoid tangling or scratching.',
    shippingReturns:
      'Complimentary worldwide shipping on orders over $75. Returns accepted within 30 days in original packaging.',
    accentLine: 'A complete set, wrapped with intention.',
    galleryViews: [
      'luxury jewelry gift box with gold necklace and earrings on velvet',
      'editorial model portrait wearing matching gold necklace and earrings',
      'flat lay of gold jewelry gift set with ribbon and note card',
      'close detail of premium jewelry set packaging in warm neutral light',
    ],
    variants: ['Gold Tone', 'Silver Tone'],
  },
]

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

export const getRelatedProducts = (slug, limit = 3) => {
  const current = getProductBySlug(slug)

  if (!current) {
    return products.slice(0, limit)
  }

  return products
    .filter(
      (product) =>
        product.slug !== slug &&
        (product.category === current.category || product.material === current.material),
    )
    .slice(0, limit)
}

export const priceFilters = [
  { value: 'all', label: 'All prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-120', label: '$80 – $120' },
]

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]
