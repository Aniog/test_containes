export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    category: 'Earrings',
    price: 42,
    rating: 4.8,
    reviewCount: 124,
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Designed to sit elegantly along the ear curve for a modern, refined look.',
    details: '18K gold-plated brass with crystal accent. Hypoallergenic and nickel-free. One size fits most.',
    materials: '18K gold-plated brass, crystal',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days. Express delivery 2-3 business days available.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: {
      primary: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    },
    variants: ['gold', 'silver'],
    bestseller: true,
    isNew: false
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    category: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviewCount: 89,
    description: 'A stunning multicolor floral crystal necklace that captures the essence of a blooming garden. Each petal is meticulously set to create a wearable piece of art.',
    details: '18K gold-plated brass with multicolor crystals. Adjustable chain length: 16-18 inches. Lobster clasp closure.',
    materials: '18K gold-plated brass, multicolor crystals',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days. Express delivery 2-3 business days available.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: {
      primary: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    },
    variants: ['gold'],
    bestseller: true,
    isNew: false
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    category: 'Huggies',
    price: 38,
    rating: 4.7,
    reviewCount: 156,
    description: 'Chunky gold dome huggie earrings that make a statement. The perfect everyday luxury piece with a modern, sculptural silhouette.',
    details: '18K gold-plated brass. Hinge closure. Diameter: 12mm. Lightweight and comfortable for all-day wear.',
    materials: '18K gold-plated brass',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days. Express delivery 2-3 business days available.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: {
      primary: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80'
    },
    variants: ['gold', 'silver'],
    bestseller: true,
    isNew: false
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    category: 'Earrings',
    price: 54,
    rating: 4.6,
    reviewCount: 67,
    description: 'Textured gold filigree drop earrings inspired by vintage lace patterns. Lightweight and elegant, perfect for elevating any outfit.',
    details: '18K gold-plated brass with intricate filigree work. Drop length: 35mm. Fish hook ear wires.',
    materials: '18K gold-plated brass',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days. Express delivery 2-3 business days available.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: {
      primary: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=800&q=80'
    },
    variants: ['gold'],
    bestseller: false,
    isNew: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    category: 'Sets',
    price: 95,
    rating: 4.9,
    reviewCount: 42,
    description: 'A gift-boxed set featuring matching earrings and necklace. The ultimate expression of timeless elegance, perfect for gifting or treating yourself.',
    details: '18K gold-plated brass with crystal accents. Includes matching earrings and necklace. Presented in a luxury gift box.',
    materials: '18K gold-plated brass, crystals',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and harsh chemicals. Clean with a soft cloth.',
    shipping: 'Free worldwide shipping on orders over $50. Standard delivery 5-7 business days. Express delivery 2-3 business days available.',
    returns: '30-day hassle-free returns. Items must be unworn and in original packaging.',
    images: {
      primary: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
      secondary: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80'
    },
    variants: ['gold'],
    bestseller: true,
    isNew: false
  }
]

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80' }
]

export const testimonials = [
  { id: 1, name: 'Sarah M.', rating: 5, text: 'The quality is absolutely stunning. I\'ve never received so many compliments on a piece of jewelry.' },
  { id: 2, name: 'Emily R.', rating: 5, text: 'Beautiful packaging, fast shipping, and the necklace is even more gorgeous in person. Will definitely order again.' },
  { id: 3, name: 'Jessica L.', rating: 5, text: 'Perfect gift for my best friend. The heirloom set was packaged so elegantly. She cried when she opened it.' }
]

export const ugcItems = [
  { id: 1, user: '@sarahstyle', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80', caption: 'Obsessed with my new huggies' },
  { id: 2, user: '@emilyjewelry', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80', caption: 'The perfect everyday necklace' },
  { id: 3, user: '@jessicagifts', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=400&q=80', caption: 'Gift goals achieved' },
  { id: 4, user: '@annaluxe', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&q=80', caption: 'Filigree perfection' },
  { id: 5, user: '@megsstyle', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400&q=80', caption: 'Heirloom set for the win' }
]
