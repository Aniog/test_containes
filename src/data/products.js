// Seed product data for Velmora Fine Jewelry
export const products = [
  {
    id: 'vivid-aura-ear-cuff',
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    subcategory: 'ear-cuff',
    price: 42,
    description:
      'A sculptural gold ear cuff with a crystal drop accent. Wears beautifully alone or layered — this is the piece that makes an outfit.',
    details:
      '18K gold-plated sterling silver base. Hypoallergenic. Crystal: faceted quartz. Width: 8mm. One size fits most.',
    materials:
      '18K gold-plated over sterling silver. Crystals: synthetic quartz. Lead & nickel free. Store in the provided pouch when not wearing.',
    shipping:
      'Complimentary worldwide shipping on all orders. Standard delivery 5–8 business days; express 2–3 days. Returns accepted within 30 days of delivery — unworn, in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ],
    rating: 4.8,
    reviews: 124,
    tags: ['bestseller', 'gift'],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'majestic-flora-necklace',
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    subcategory: 'crystal-necklace',
    price: 68,
    description:
      'A multicolor floral crystal pendant on a fine chain. Each crystal catches the light differently — this necklace changes with you.',
    details:
      '18K gold-plated sterling silver chain and setting. Crystals: multicolor glass. Pendant: 12mm. Chain length: 40cm + 5cm extender.',
    materials:
      '18K gold-plated over sterling silver. Crystals: multicolored glass stones. Hypoallergenic. Avoid water and perfume. Store separately.',
    shipping:
      'Complimentary worldwide shipping on all orders. Standard delivery 5–8 business days; express 2–3 days. Returns accepted within 30 days of delivery — unworn, in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 98,
    tags: ['new', 'gift'],
    variants: ['Gold', 'Rose Gold'],
    inStock: true,
  },
  {
    id: 'golden-sphere-huggies',
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'earrings',
    subcategory: 'huggies',
    price: 38,
    description:
      'Chunky dome huggie earrings that hug the lobe with effortless elegance. A demi-fine staple that goes with everything.',
    details:
      '18K gold-plated brass. Inner diameter: 10mm. Hypoallergenic, lightweight. Sold as a pair.',
    materials:
      '18K gold-plated over brass. Tarnish-resistant coating. Wipe with soft cloth after wearing. Store in a dry place.',
    shipping:
      'Complimentary worldwide shipping on all orders. Standard delivery 5–8 business days; express 2–3 days. Returns accepted within 30 days of delivery — unworn, in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=80',
    ],
    rating: 4.7,
    reviews: 215,
    tags: ['bestseller'],
    variants: ['Gold', 'Silver'],
    inStock: true,
  },
  {
    id: 'amber-lace-earrings',
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    subcategory: 'drop-earrings',
    price: 54,
    description:
      'Delicate textured gold filigree drop earrings with an artisan quality. Intricate without being fussy — evening or everyday.',
    details:
      '18K gold-plated sterling silver. Drop length: 28mm. Width: 10mm. Lever-back closure. Sold as a pair.',
    materials:
      '18K gold-plated over sterling silver with filigree detailing. Hypoallergenic. Avoid moisture. Store flat in the provided box.',
    shipping:
      'Complimentary worldwide shipping on all orders. Standard delivery 5–8 business days; express 2–3 days. Returns accepted within 30 days of delivery — unworn, in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    ],
    rating: 4.9,
    reviews: 76,
    tags: ['gift'],
    variants: ['Gold'],
    inStock: true,
  },
  {
    id: 'royal-heirloom-set',
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    subcategory: 'earring-necklace-set',
    price: 95,
    description:
      'Our most beloved pairing: a pair of delicate huggie earrings and a matching pendant necklace, boxed together in our signature gift packaging. The perfect present.',
    details:
      'Includes: Golden Sphere Huggies + Majestic Flora Pendant on chain. Presented in a Velmora gift box. Chain length: 40cm + 5cm extender.',
    materials:
      '18K gold-plated over sterling silver and brass. Hypoallergenic. Tarnish-resistant. See individual product pages for full care instructions.',
    shipping:
      'Complimentary worldwide shipping on all orders. Standard delivery 5–8 business days; express 2–3 days. Returns accepted within 30 days of delivery — unworn, in original packaging.',
    images: [
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=800&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    ],
    rating: 5.0,
    reviews: 58,
    tags: ['bestseller', 'gift'],
    variants: ['Gold'],
    inStock: true,
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductById = (id) => products.find((p) => p.id === id);
export const getRelatedProducts = (product, limit = 4) =>
  products.filter((p) => p.id !== product.id).slice(0, limit);

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Ear cuffs, huggies, drops & studs',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Pendants, chains & layered sets',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Our signature dome huggie earrings',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sophia L.',
    rating: 5,
    text: 'The quality is genuinely stunning. I\'ve had compliments every single time I\'ve worn the Vivid Aura ear cuff. It doesn\'t look "costume" at all.',
    product: 'Vivid Aura Jewels',
  },
  {
    id: 2,
    name: 'Mei W.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a gift for my sister. The packaging alone made her cry — it felt so luxurious. The jewelry is even prettier in person.',
    product: 'Royal Heirloom Set',
  },
  {
    id: 3,
    name: 'Camille R.',
    rating: 5,
    text: 'Finally, gold jewelry that doesn\'t turn my ears green. I wear my Golden Sphere Huggies every single day. Worth every penny.',
    product: 'Golden Sphere Huggies',
  },
];

export const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Everyday luxury ✨',
    handle: '@velmora',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Layered & luminous',
    handle: '@velmora',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80',
    caption: 'The Huggies, always.',
    handle: '@velmora',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Golden hour glow',
    handle: '@velmora',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    caption: 'Evening elegance',
    handle: '@velmora',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=600&q=80',
    caption: 'The perfect gift',
    handle: '@velmora',
  },
];
