export const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    category: 'earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 127,
    badge: 'Bestseller',
    shortDescription: 'Gold ear cuff with a luminous crystal accent — no piercing required.',
    fullDescription:
      'The Vivid Aura Jewels ear cuff wraps your ear in warm 18K gold plating, adorned with a single brilliant-cut crystal that catches the light at every angle. Designed to sit comfortably without any piercing, it can be worn solo for a minimal look or stacked with your favorite studs for added drama.',
    materials:
      '18K gold-plated brass · cubic zirconia crystal · nickel-free · hypoallergenic',
    care: 'Avoid contact with water, perfume, and harsh chemicals. Store in the included pouch to maintain luster.',
    shipping:
      'Free worldwide shipping. Orders dispatch within 1–2 business days. 30-day hassle-free returns.',
    variants: [
      { label: 'Gold', value: 'gold' },
      { label: 'Silver', value: 'silver' },
    ],
    imgAriaLabel: 'Gold ear cuff with crystal on dark velvet',
    related: ['golden-sphere-huggies', 'amber-lace-earrings'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    category: 'necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 203,
    badge: 'New',
    shortDescription: 'Multicolor floral crystal necklace inspired by Art Nouveau gardens.',
    fullDescription:
      'A statement piece that draws from the organic curves of Art Nouveau, the Majic Flora Nectar features hand-set multicolor crystals arranged in a delicate floral pendant on a fine 18K gold chain. Each petal catches light differently, creating a living sparkle that moves with you.',
    materials:
      '18K gold-plated sterling silver · multicolor cubic zirconia · lobster clasp · hypoallergenic',
    care: 'Polish gently with the included microfiber cloth. Store flat to prevent chain tangling.',
    shipping:
      'Free worldwide shipping. Orders dispatch within 1–2 business days. 30-day hassle-free returns.',
    variants: [
      { label: 'Gold', value: 'gold' },
      { label: 'Silver', value: 'silver' },
    ],
    imgAriaLabel: 'Floral crystal necklace with gold chain',
    related: ['vivid-aura-jewels', 'royal-heirloom-set'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    category: 'huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    badge: 'Bestseller',
    shortDescription: 'Chunky gold dome huggie earrings — bold yet endlessly wearable.',
    fullDescription:
      'The Golden Sphere Huggies feature a polished dome silhouette that hugs your earlobe with a satisfying weight. The mirror-finish 18K gold plating delivers a liquid-metal effect that reads as both modern and timeless. Snap-back closure keeps them secure all day.',
    materials:
      '18K gold-plated brass · snap-back closure · nickel-free · hypoallergenic',
    care: 'Wipe with a soft cloth after each wear. Avoid swimming or showering while wearing.',
    shipping:
      'Free worldwide shipping. Orders dispatch within 1–2 business days. 30-day hassle-free returns.',
    variants: [
      { label: 'Gold', value: 'gold' },
      { label: 'Silver', value: 'silver' },
    ],
    imgAriaLabel: 'Gold dome huggie earrings',
    related: ['amber-lace-earrings', 'vivid-aura-jewels'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    category: 'earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 89,
    badge: null,
    shortDescription: 'Textured gold filigree drop earrings with vintage charm.',
    fullDescription:
      'Inspired by Victorian lacework, the Amber Lace Earrings feature intricate filigree cutouts finished in warm 18K gold. Their elongated drop silhouette flatters every face shape, while the openwork design keeps them remarkably lightweight.',
    materials:
      '18K gold-plated brass · lever-back closure · nickel-free · hypoallergenic',
    care: 'Store individually in soft pouches. Clean with a dry jewelry cloth.',
    shipping:
      'Free worldwide shipping. Orders dispatch within 1–2 business days. 30-day hassle-free returns.',
    variants: [
      { label: 'Gold', value: 'gold' },
      { label: 'Silver', value: 'silver' },
    ],
    imgAriaLabel: 'Gold filigree drop earrings',
    related: ['vivid-aura-jewels', 'golden-sphere-huggies'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    category: 'earrings',
    price: 95,
    rating: 5.0,
    reviewCount: 64,
    badge: 'Gift Set',
    shortDescription: 'Gift-boxed earring and necklace set — the perfect present.',
    fullDescription:
      'The Royal Heirloom Set arrives in our signature velvet-lined box, containing a pair of delicate gold stud earrings and a matching pendant necklace. Designed to be worn together or separately, this set makes gifting effortless and unforgettable.',
    materials:
      '18K gold-plated sterling silver · cubic zirconia accents · lobster clasp necklace · push-back earrings · hypoallergenic',
    care: 'Each piece should be stored separately. Polish with included cloth. Avoid moisture.',
    shipping:
      'Free worldwide shipping. Orders dispatch within 1–2 business days. 30-day hassle-free returns. Gift wrapping available.',
    variants: [
      { label: 'Gold', value: 'gold' },
      { label: 'Silver', value: 'silver' },
    ],
    imgAriaLabel: 'Gift-boxed gold earring and necklace set',
    related: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
];

export const categories = [
  { slug: 'earrings', label: 'Earrings', count: 3 },
  { slug: 'necklaces', label: 'Necklaces', count: 1 },
  { slug: 'huggies', label: 'Huggies', count: 1 },
];

export const priceRanges = [
  { label: 'Under $50', min: 0, max: 49.99 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getRelatedProducts(slug) {
  const product = getProduct(slug);
  if (!product) return [];
  return product.related.map((id) => getProduct(id)).filter(Boolean);
}

export const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow' },
  { id: 'ugc-2', caption: 'Stacked perfection' },
  { id: 'ugc-3', caption: 'Everyday elegance' },
  { id: 'ugc-4', caption: 'Ear party goals' },
  { id: 'ugc-5', caption: 'Gifting done right' },
  { id: 'ugc-6', caption: 'Statement pieces' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'The quality is incredible for the price. My Golden Sphere Huggies look like they cost three times as much. I get compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Jessica L.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone was worth it — so luxurious. She absolutely loved it.',
  },
  {
    id: 3,
    name: 'Amanda K.',
    rating: 5,
    text: 'I have sensitive skin and these are the first earrings I can wear all day without irritation. The gold plating has held up beautifully after months of daily wear.',
  },
];
