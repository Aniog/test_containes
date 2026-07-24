export const products = [
  {
    id: 'vivid-aura',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'Earrings',
    description: 'A delicate gold ear cuff featuring a subtle crystal accent. Designed to comfortably hug your ear without the need for piercing. Crafted from 18K gold vermeil over sterling silver for a lasting, radiant finish.',
    materials: ['18K Gold Vermeil', 'Sterling Silver Base', 'Cubic Zirconia Crystal'],
    images: [
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviews: 24
  },
  {
    id: 'majestic-flora',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'Necklaces',
    description: 'An ethereal necklace that captures the delicate beauty of nature. The floral pendant features multicolor crystals set in a warm gold finish, hanging gracefully from a refined cable chain.',
    materials: ['18K Gold Plated Brass', 'Premium Multicolor Crystals', 'Adjustable 16-18" Chain'],
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviews: 56
  },
  {
    id: 'golden-sphere',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'Huggies',
    description: 'The perfect everyday staple. These chunky gold dome huggies provide a solid, satisfying weight while remaining comfortable for all-day wear. The high-polish finish reflects light beautifully from every angle.',
    materials: ['18K Gold Vermeil', 'Sterling Silver Core', 'Secure Snap Closure'],
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviews: 112
  },
  {
    id: 'amber-lace',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'Earrings',
    description: 'Intricate filigree work defines these stunning drop earrings. The textured gold surface creates a vintage-inspired aesthetic that feels both heirloom-quality and distinctly modern.',
    materials: ['14K Gold Plated Recycled Brass', 'Hypoallergenic Titanium Posts'],
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviews: 38
  },
  {
    id: 'royal-heirloom',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'Sets',
    description: 'Our signature gifting experience. This curated set pairs our bestselling pendant necklace with matching stud earrings. Arrives beautifully presented in our signature velvet box, ready to delight someone special or treat yourself.',
    materials: ['18K Gold Vermeil', 'Sterling Silver Base', 'Diamond-Cut Cubic Zirconia'],
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop'
    ],
    rating: 5.0,
    reviews: 45
  }
];

export const getProducts = () => products;
export const getProductById = (id) => products.find(p => p.id === id);
export const getProductsByCategory = (category) => products.filter(p => p.category === category);
