// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 1,
    name: 'VIVID AURA JEWELS',
    description: 'Elegant gold ear cuff with crystal accent. A delicate statement piece that wraps beautifully around your ear, adding a touch of sparkle to any look.',
    price: 42,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 127,
    variants: ['gold', 'silver'],
    inStock: true
  },
  {
    id: 2,
    name: 'MAJESTIC FLORA NECTAR',
    description: 'Stunning multicolor floral crystal necklace. Delicate flowers meet vibrant crystals in this romantic piece that catches the light beautifully.',
    price: 68,
    category: 'necklaces',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 89,
    variants: ['gold', 'silver'],
    inStock: true
  },
  {
    id: 3,
    name: 'GOLDEN SPHERE HUGGIES',
    description: 'Chunky gold dome huggie earrings. These substantial yet lightweight hoops feature a beautiful polished sphere design that frames your face perfectly.',
    price: 38,
    category: 'huggies',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=800&fit=crop'
    ],
    rating: 4,
    reviews: 203,
    variants: ['gold', 'silver'],
    inStock: true
  },
  {
    id: 4,
    name: 'AMBER LACE EARRINGS',
    description: 'Textured gold filigree drop earrings. Intricate lace-like patterns create a vintage-inspired look with a modern sensibility. Perfect for special occasions.',
    price: 54,
    category: 'earrings',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 156,
    variants: ['gold'],
    inStock: true
  },
  {
    id: 5,
    name: 'ROYAL HEIRLOOM SET',
    description: 'Gift-boxed earring + necklace set. The ultimate luxurious gift, this matching set features intricate designs that work beautifully together or separately.',
    price: 95,
    category: 'sets',
    material: '18K Gold Plated',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop'
    ],
    rating: 5,
    reviews: 78,
    variants: ['gold'],
    inStock: true
  }
];

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' }
];

export const testimonials = [
  { id: 1, name: 'Sarah M.', rating: 5, text: 'The quality is incredible. I wear my Golden Sphere Huggies every single day.' },
  { id: 2, name: 'Emily R.', rating: 5, text: 'Beautiful packaging and even more beautiful jewelry. Will definitely be ordering again.' },
  { id: 3, name: 'Jessica L.', rating: 5, text: 'Received so many compliments on my Royal Heirloom Set. Worth every penny.' }
];

export const ugcImages = [
  { id: 1, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop', caption: 'Everyday elegance' },
  { id: 2, image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop', caption: 'My everyday staple' },
  { id: 3, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop', caption: 'Obsessed with this piece' },
  { id: 4, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=600&fit=crop', caption: 'Perfect for gifting' },
  { id: 5, image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop', caption: 'Adding sparkle to my day' },
  { id: 6, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=600&fit=crop', caption: 'Timeless beauty' }
];