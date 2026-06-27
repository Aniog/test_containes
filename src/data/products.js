export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    subtitle: 'Gold Ear Cuff with Crystal Accent',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    description: 'A sculptural ear cuff that hugs the curve of your ear with effortless elegance. Adorned with a single crystal accent that catches the light with every turn of your head.',
    materials: '18K gold plated over recycled brass. Crystal accent. Hypoallergenic. Nickel-free.',
    care: 'Avoid contact with water, perfume, and lotions. Store in the provided velvet pouch. Gently polish with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Silver'],
    related: ['golden-sphere-huggies', 'amber-lace-earrings'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    subtitle: 'Multicolor Floral Crystal Necklace',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 89,
    description: 'A delicate pendant featuring hand-set multicolor crystals arranged in a blooming floral motif. The chain drapes gracefully at the collarbone, catching light from every angle.',
    materials: '18K gold plated chain. Austrian crystal stones. Adjustable 16-18 inch chain with lobster clasp.',
    care: 'Store flat in the provided jewelry box. Avoid moisture and chemicals. Clean with a dry microfiber cloth.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Silver'],
    related: ['royal-heirloom-set', 'vivid-aura-jewels'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    subtitle: 'Chunky Gold Dome Huggie Earrings',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    description: 'Our bestselling huggies feature a perfectly rounded dome silhouette that sits flush against the earlobe. The chunky profile makes a quiet but confident statement.',
    materials: '18K gold plated over solid brass. Hinged post closure. 12mm diameter. Hypoallergenic.',
    care: 'Wipe clean after each wear. Store separately to avoid scratches. Keep away from perfumes and hairspray.',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Silver'],
    related: ['vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    subtitle: 'Textured Gold Filigree Drop Earrings',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviews: 67,
    description: 'Intricate filigree work creates a lace-like pattern that dances with movement. These drop earrings add old-world romance to any ensemble, from casual to evening.',
    materials: '18K gold plated over brass. French wire hooks. 45mm drop length. Lightweight construction.',
    care: 'Handle by the wire to avoid bending. Store hanging or flat in a soft pouch. Polish gently with jewelry cloth.',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Silver'],
    related: ['golden-sphere-huggies', 'vivid-aura-jewels'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    subtitle: 'Gift-Boxed Earring + Necklace Set',
    price: 95,
    category: 'necklaces',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 41,
    description: 'A curated pairing of matching drop earrings and a pendant necklace, presented in our signature velvet gift box. The perfect expression of thoughtfulness for someone special — or yourself.',
    materials: '18K gold plated over brass. Austrian crystal accents. Necklace: 16-18 inch adjustable chain. Earrings: 30mm drop. Presented in luxury gift box.',
    care: 'Store each piece separately in the provided compartments. Avoid moisture. Clean with included polishing cloth.',
    images: [
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
    ],
    variants: ['Gold', 'Silver'],
    related: ['majestic-flora-nectar', 'amber-lace-earrings'],
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (ids) => ids.map((id) => getProductById(id)).filter(Boolean)

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export const materials = ['18K Gold Plated', 'Sterling Silver', 'Rose Gold Plated']

export const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 – $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
]
