const products = [
  {
    id: 'vivid-aura-jewels',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    rating: 4.8,
    reviewCount: 124,
    description:
      'A single luminous crystal cradled in an open gold cuff. Designed to catch the light with every turn, this ear cuff delivers quiet radiance without the need for a piercing.',
    materials:
      '18K gold-plated brass with Swarovski crystal accent. Hypoallergenic, nickel-free.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the Velmora pouch provided.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days.',
    returns: '30-day hassle-free returns on unworn items in original packaging.',
    variants: [
      { label: '18K Gold', value: 'gold', inStock: true },
      { label: 'Silver Tone', value: 'silver', inStock: true },
    ],
    images: ['vivid-aura-1', 'vivid-aura-2'],
    bestseller: true,
    tags: ['cuff', 'crystal', 'minimal'],
  },
  {
    id: 'majestic-flora-nectar',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    rating: 4.9,
    reviewCount: 87,
    description:
      'A cascade of multicolor crystal blooms suspended from a delicate gold chain. Each flower is hand-set to create a vibrant, garden-inspired statement that feels both romantic and modern.',
    materials:
      '18K gold-plated brass with multicolor Swarovski crystals. Lobster clasp. Hypoallergenic.',
    care: 'Avoid contact with water, perfume, and lotion. Store flat in the Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days.',
    returns: '30-day hassle-free returns on unworn items in original packaging.',
    variants: [
      { label: '18K Gold', value: 'gold', inStock: true },
      { label: 'Silver Tone', value: 'silver', inStock: false },
    ],
    images: ['flora-1', 'flora-2'],
    bestseller: true,
    tags: ['floral', 'crystal', 'statement'],
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    rating: 4.7,
    reviewCount: 203,
    description:
      'Chunky gold dome huggies with a sculptural silhouette. Polished to a mirror finish, these earrings wrap the lobe with understated boldness — an everyday staple elevated.',
    materials:
      '18K gold-plated brass. Hinged post closure. Hypoallergenic, nickel-free.',
    care: 'Avoid contact with water, perfume, and lotion. Wipe gently with a soft cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days.',
    returns: '30-day hassle-free returns on unworn items in original packaging.',
    variants: [
      { label: '18K Gold', value: 'gold', inStock: true },
      { label: 'Silver Tone', value: 'silver', inStock: true },
    ],
    images: ['huggies-1', 'huggies-2'],
    bestseller: true,
    tags: ['huggies', 'dome', 'everyday'],
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    rating: 4.6,
    reviewCount: 56,
    description:
      'Intricate gold filigree drops inspired by antique lacework. Lightweight and airy, these earrings sway with a soft warmth that frames the face beautifully.',
    materials:
      '18K gold-plated brass with matte brushed finish. French wire hooks. Hypoallergenic.',
    care: 'Avoid contact with water, perfume, and lotion. Store hanging in the Velmora pouch.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days.',
    returns: '30-day hassle-free returns on unworn items in original packaging.',
    variants: [
      { label: '18K Gold', value: 'gold', inStock: true },
      { label: 'Silver Tone', value: 'silver', inStock: false },
    ],
    images: ['amber-1', 'amber-2'],
    bestseller: true,
    tags: ['filigree', 'drop', 'textured'],
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    rating: 5.0,
    reviewCount: 42,
    description:
      'A gift-boxed pairing of our signature crystal drop earrings and matching pendant necklace. Designed to be passed down, this set arrives in a velvet-lined keepsake box with a handwritten note card.',
    materials:
      '18K gold-plated brass with Swarovski crystals. Velvet-lined gift box included. Hypoallergenic.',
    care: 'Avoid contact with water, perfume, and lotion. Store in the Velmora box provided.',
    shipping: 'Free worldwide shipping. Orders ship within 1–2 business days.',
    returns: '30-day hassle-free returns on unworn items in original packaging.',
    variants: [
      { label: '18K Gold', value: 'gold', inStock: true },
      { label: 'Silver Tone', value: 'silver', inStock: true },
    ],
    images: ['heirloom-1', 'heirloom-2'],
    bestseller: true,
    tags: ['set', 'gift', 'crystal'],
  },
];

export const categories = [
  { id: 'earrings', name: 'Earrings', slug: 'earrings' },
  { id: 'necklaces', name: 'Necklaces', slug: 'necklaces' },
  { id: 'huggies', name: 'Huggies', slug: 'huggies' },
  { id: 'sets', name: 'Sets', slug: 'sets' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sophia R.',
    text: 'The Golden Sphere Huggies are even more stunning in person. I wear them every day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Olivia M.',
    text: 'Ordered the Royal Heirloom Set for my sister\'s wedding. The packaging alone made her cry. Absolutely exquisite.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Charlotte K.',
    text: 'I\'ve never received so many compliments on a piece of jewelry. The Amber Lace Earrings are true craftsmanship.',
    rating: 5,
  },
];

export default products;