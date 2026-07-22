// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    shortName: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff adorned with a brilliant crystal accent. This piece effortlessly elevates any look from casual to elegant.',
    details: [
      '18K Gold Plated',
      'Crystal accent',
      'Hypoallergenic',
      'Lightweight design',
    ],
    materials: 'Made with 18K gold plating over sterling silver. Crystals sourced from trusted suppliers.',
    care: 'Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. Standard delivery: 5-7 business days.',
    returns: '30-day returns. Items must be unworn and in original packaging.',
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=800&fit=crop',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    shortName: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal necklace that captures the essence of a blooming garden. Perfect for special occasions or everyday luxury.',
    details: [
      '18K Gold Plated Chain',
      'Multicolor crystal blooms',
      'Adjustable length 16-18"',
      'Secure lobster clasp',
    ],
    materials: '18K gold plated chain with hand-set crystals in rose, amber, and clear tones.',
    care: 'Store separately to avoid scratching. Clean with a jewelry cloth. Remove before swimming.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. Standard delivery: 5-7 business days.',
    returns: '30-day returns. Items must be unworn and in original packaging.',
    rating: 4.9,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop',
    ],
    variants: ['gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    shortName: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    description: 'Chunky, statement-making gold dome huggie earrings. These bold hoops hug your earlobe for all-day comfort with maximum impact.',
    details: [
      '18K Gold Plated',
      'Dome shape',
      'Clicker closure',
      'Lightweight yet bold',
    ],
    materials: '18K gold plating over hypoallergenic brass.',
    care: 'Wipe clean with a soft cloth. Store in the provided pouch when not wearing.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. Standard delivery: 5-7 business days.',
    returns: '30-day returns. Items must be unworn and in original packaging.',
    rating: 4.7,
    reviews: 156,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
    ],
    variants: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    shortName: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    description: 'Elegant textured gold filigree drop earrings inspired by vintage lace patterns. Each pair features intricate openwork detailing.',
    details: [
      '18K Gold Plated',
      'Filigree detailing',
      'Drop length 1.5"',
      'French hook or post back',
    ],
    materials: '18K gold over sterling silver with handcrafted filigree work.',
    care: 'Avoid moisture and harsh chemicals. Store in a dry place. Polish gently as needed.',
    shipping: 'Free worldwide shipping. Orders ship within 1-2 business days. Standard delivery: 5-7 business days.',
    returns: '30-day returns. Items must be unworn and in original packaging.',
    rating: 4.9,
    reviews: 67,
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=800&fit=crop',
    ],
    variants: ['gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    shortName: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. The perfect gift for yourself or someone special.',
    details: [
      'Matching earring + necklace',
      'Elegant gift box included',
      '18K Gold Plated',
      'Perfect gift packaging',
    ],
    materials: '18K gold plating over quality brass. Nickel-free and hypoallergenic.',
    care: 'Store in the provided gift box. Clean with a soft cloth after each wear.',
    shipping: 'Free worldwide shipping. Arrives in signature gift packaging. Orders ship within 1-2 business days.',
    returns: '30-day returns. Items must be unworn and in original packaging with all accessories.',
    rating: 4.8,
    reviews: 203,
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
    ],
    variants: ['gold'],
  },
];

export const categories = [
  { id: 'all', name: 'All Jewelry', count: products.length },
  { id: 'earrings', name: 'Earrings', count: products.filter(p => p.category === 'earrings').length },
  { id: 'necklaces', name: 'Necklaces', count: products.filter(p => p.category === 'necklaces').length },
  { id: 'huggies', name: 'Huggies', count: products.filter(p => p.category === 'huggies').length },
  { id: 'sets', name: 'Sets', count: products.filter(p => p.category === 'sets').length },
];

export const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    rating: 5,
    text: 'Absolutely stunning quality. I receive compliments every time I wear my Majestic Flora necklace.',
  },
  {
    id: 2,
    name: 'Sophia R.',
    rating: 5,
    text: 'The packaging alone made me feel special. The jewelry is even more beautiful in person.',
  },
  {
    id: 3,
    name: 'Isabella C.',
    rating: 5,
    text: 'Finally found demi-fine jewelry that doesn\'t turn green. Velmora is now my go-to for gifts.',
  },
];

export const ugcContent = [
  { id: 1, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&h=700&fit=crop', caption: 'Everyday elegance' },
  { id: 2, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop', caption: 'Golden hour glow' },
  { id: 3, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop', caption: 'Minimalist chic' },
  { id: 4, image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop', caption: 'Gift ready' },
  { id: 5, image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=700&fit=crop', caption: 'Statement piece' },
  { id: 6, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=700&fit=crop', caption: 'Layered perfection' },
];

export const navLinks = [
  { label: 'Shop', href: '/collection' },
  { label: 'Collections', href: '/collection' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
];

export const footerLinks = {
  shop: [
    { label: 'All Jewelry', href: '/collection' },
    { label: 'Earrings', href: '/collection?category=earrings' },
    { label: 'Necklaces', href: '/collection?category=necklaces' },
    { label: 'Huggies', href: '/collection?category=huggies' },
    { label: 'Gift Sets', href: '/collection?category=sets' },
  ],
  help: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Shipping Info', href: '/shipping' },
    { label: 'Returns & Exchanges', href: '/returns' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Care Instructions', href: '/care' },
  ],
  company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Press', href: '/press' },
    { label: 'Careers', href: '/careers' },
  ],
};
