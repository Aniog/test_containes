export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'earrings',
    material: '18k-gold',
    materialLabel: '18K Gold Plated',
    rating: 4.9,
    reviews: 214,
    badge: 'Bestseller',
    short:
      'A sculptural ear cuff that hugs the lobe, finished with a single hand-set crystal that catches candlelight beautifully.',
    description:
      'The Vivid Aura Jewels cuff is designed for days that turn into evenings. Its open silhouette slips on without a piercing and stays secure, while a pavé-set crystal adds a quiet point of light. Wear it solo or stacked with huggies.',
    materials:
      'Crafted from recycled brass with a thick layer of 18K gold plating (2.5 microns), nickel-free and hypoallergenic. The crystal is a hand-set AAA cubic zirconia. To care for your piece, avoid water, perfume and lotions, and store it in the velvet pouch provided.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'necklaces',
    material: '18k-gold',
    materialLabel: '18K Gold Plated',
    rating: 4.8,
    reviews: 156,
    badge: 'New',
    short:
      'A delicate floral pendant strung with multicolor crystals on a fine gold chain — a garden captured in miniature.',
    description:
      'Majestic Flora Nectar gathers hand-set crystals in warm champagne, blush and honey tones into a blossoming pendant. The adjustable chain lets it rest at the collarbone or layer lower with longer pieces.',
    materials:
      '18K gold plated over recycled brass (2.5 microns), nickel-free and hypoallergenic. Crystals are hand-set AAA cubic zirconia. Keep away from water and fragrance; polish gently with the soft cloth included in your order.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'huggies',
    material: '18k-gold',
    materialLabel: '18K Gold Plated',
    rating: 5.0,
    reviews: 302,
    badge: 'Bestseller',
    short:
      'Chunky dome huggies with a molten-mirror finish — the everyday pair that goes with absolutely everything.',
    description:
      'Golden Sphere Huggies are the pair our studio reaches for daily. A softly domed profile reflects light like liquid gold, and the hinged closure clicks shut with satisfying precision. Feather-light despite their bold shape.',
    materials:
      '18K gold plated over recycled brass (2.5 microns), nickel-free and hypoallergenic. Hinged sterling posts. Wipe after wear and store in the pouch to preserve the mirror finish.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'earrings',
    material: '18k-gold',
    materialLabel: '18K Gold Plated',
    rating: 4.7,
    reviews: 98,
    badge: null,
    short:
      'Feather-light filigree drops inspired by antique lace, catching warm light with every movement.',
    description:
      'Amber Lace Earrings translate vintage lacework into finely textured gold filigree. Each drop is cast, then hand-finished so the pattern stays crisp. They sway as you move — elegant at dinner, effortless by day.',
    materials:
      '18K gold plated over recycled brass (2.5 microns), nickel-free and hypoallergenic. Store flat in the velvet pouch; the openwork filigree is delicate by design.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'necklaces',
    material: '18k-gold',
    materialLabel: '18K Gold Plated',
    rating: 4.9,
    reviews: 187,
    badge: 'Gift Ready',
    short:
      'A matched earring and necklace set in our signature gift box — the piece they will keep for decades.',
    description:
      'The Royal Heirloom Set pairs a fine crystal-drop necklace with matching huggie earrings, presented in a linen-wrapped keepsake box with a hand-tied ribbon. Our most gifted piece, made to be treasured and passed on.',
    materials:
      'Both pieces are 18K gold plated over recycled brass (2.5 microns), nickel-free and hypoallergenic, with hand-set AAA cubic zirconia. The keepsake box doubles as a travel case.',
  },
]

export const RELATED_POOL = PRODUCTS

export const formatPrice = (value) => `$${Number(value).toFixed(0)}`

export const getProduct = (id) => PRODUCTS.find((p) => p.id === id)

export const getRelated = (product, count = 4) =>
  RELATED_POOL.filter((p) => p.id !== product.id).slice(0, count)
