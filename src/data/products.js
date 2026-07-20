export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 127,
    description: 'A sculptural gold ear cuff featuring a single crystal accent that catches the light with every movement. Designed for effortless stacking or striking solo wear.',
    details: '18K gold-plated brass. Single crystal accent. Cuff style — no piercing required. Adjustable fit.',
    care: 'Store in a dry place. Avoid contact with perfumes, lotions, and water. Polish gently with a soft cloth.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=1000&fit=crop',
    variants: ['gold', 'silver'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 203,
    description: 'A delicate chain necklace adorned with multicolor floral crystals in soft pastel hues. The perfect statement piece for everyday elegance.',
    details: '18K gold-plated chain. Handset multicolor crystals. Adjustable 16–18 inch length. Lobster clasp closure.',
    care: 'Keep away from moisture. Store in provided pouch. Clean with a dry soft cloth only.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=1000&fit=crop',
    variants: ['gold'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 89,
    description: 'Chunky gold dome huggie earrings that hug the lobe with sculptural volume. Lightweight enough for all-day comfort, bold enough to turn heads.',
    details: '18K gold-plated stainless steel. Hypoallergenic. Hinge closure. Diameter: 12mm. Weight: 4g per pair.',
    care: 'Avoid sleeping or showering in your huggies. Wipe clean after wear. Store flat.',
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=1000&fit=crop',
    variants: ['gold', 'silver'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 156,
    description: 'Textured gold filigree drop earrings inspired by antique lace patterns. Each curve catches light differently, creating a warm, living glow.',
    details: '18K gold-plated brass. Filigree texture. Fish hook closure. Length: 45mm. Nickel-free.',
    care: 'Handle with care to preserve delicate filigree. Store hanging or flat. Avoid bending.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&h=1000&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=1000&fit=crop',
    variants: ['gold'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 74,
    description: 'A curated gift set featuring our bestselling earring and necklace pairing, presented in a signature Velmora gift box. The ultimate self-gift or thoughtful present.',
    details: 'Includes: Amber Lace Earrings + Majestic Flora Nectar Necklace. 18K gold-plated. Gift box included. Complimentary handwritten note available.',
    care: 'Follow individual product care instructions. Store set together in provided gift box.',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop',
    ],
    hoverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop',
    variants: ['gold'],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== currentId).slice(0, limit);

export const categories = [
  { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop' },
  { id: 'huggies', name: 'Huggies', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'The quality exceeded my expectations. These pieces look far more expensive than they are — I get compliments every time I wear them.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jessica T.',
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging felt so premium and personal.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amanda K.',
    text: 'Finally, demi-fine jewelry that does not tarnish after a month. My huggies still look brand new after 6 months of daily wear.',
    rating: 5,
  },
];

export const ugcPosts = [
  { id: 1, caption: 'Everyday gold', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=600&fit=crop' },
  { id: 2, caption: 'Stacked & styled', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=600&fit=crop' },
  { id: 3, caption: 'Date night ready', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=600&fit=crop' },
  { id: 4, caption: 'Minimal but luxe', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=600&fit=crop' },
  { id: 5, caption: 'Gift to myself', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=600&fit=crop' },
  { id: 6, caption: 'Layering season', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop' },
];