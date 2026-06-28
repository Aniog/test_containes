export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    description:
      'A sculpted ear cuff in 18K gold-plated brass, finished with a single hand-set crystal. Designed to be worn solo for a quiet statement or stacked with studs for an editorial ear.',
    price: 42,
    category: 'Earrings',
    materials: '18K gold-plated brass, hand-set crystal accent',
    rating: 4.9,
    reviews: 218,
    variants: ['Gold', 'Silver'],
    bestseller: true,
    imgId: 'product-vivid-aura',
    imgIdAlt: 'product-vivid-aura-alt',
    imgQueryPrimary:
      'minimalist gold ear cuff with single crystal on warm dark editorial background closeup',
    imgQuerySecondary:
      'gold ear cuff worn on model ear warm light editorial portrait',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    description:
      'A delicate floral pendant strung on a fine box chain. Pavé-set crystals catch the light from every angle — heirloom-grade detail at a demi-fine price.',
    price: 68,
    category: 'Necklaces',
    materials: '18K gold-plated, multicolor crystals, adjustable 16–18" chain',
    rating: 4.8,
    reviews: 342,
    variants: ['Gold', 'Silver'],
    bestseller: true,
    imgId: 'product-majestic-flora',
    imgIdAlt: 'product-majestic-flora-alt',
    imgQueryPrimary:
      'delicate gold floral pendant necklace with multicolor crystals on warm beige editorial flatlay',
    imgQuerySecondary:
      'gold floral crystal necklace worn on neck warm soft editorial portrait',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    description:
      'Substantial, sculptural, and impossibly comfortable. These dome huggies have a high-polish 18K gold finish and a secure hinge closure for everyday wear.',
    price: 38,
    category: 'Huggies',
    materials: '18K gold-plated brass, hinge closure, hypoallergenic post',
    rating: 4.9,
    reviews: 514,
    variants: ['Gold', 'Silver'],
    bestseller: true,
    imgId: 'product-golden-sphere',
    imgIdAlt: 'product-golden-sphere-alt',
    imgQueryPrimary:
      'chunky polished gold dome huggie hoop earrings closeup on warm cream marble',
    imgQuerySecondary:
      'gold dome huggie hoops worn on model ear soft warm light',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    description:
      'Hand-finished filigree drops that catch warm light like vintage lace. Lightweight enough for all day, dramatic enough for evening.',
    price: 54,
    category: 'Earrings',
    materials: '18K gold-plated brass, hand-textured filigree',
    rating: 4.7,
    reviews: 187,
    variants: ['Gold', 'Silver'],
    bestseller: true,
    imgId: 'product-amber-lace',
    imgIdAlt: 'product-amber-lace-alt',
    imgQueryPrimary:
      'textured gold filigree drop earrings warm amber light editorial closeup',
    imgQuerySecondary:
      'gold filigree drop earrings worn on model ear warm side light',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    description:
      'Our most-gifted set. A pair of refined gold drop earrings paired with a matching pendant necklace, arriving in a signature Velmora keepsake box.',
    price: 95,
    category: 'Sets',
    materials: '18K gold-plated, comes in Velmora keepsake gift box',
    rating: 5.0,
    reviews: 96,
    variants: ['Gold', 'Silver'],
    bestseller: true,
    imgId: 'product-royal-heirloom',
    imgIdAlt: 'product-royal-heirloom-alt',
    imgQueryPrimary:
      'luxury gold earring and necklace gift set in cream keepsake jewelry box warm editorial',
    imgQuerySecondary:
      'gold jewelry gift set styled on warm linen with ribbon editorial flatlay',
  },
];

export const collections = [
  {
    id: 'earrings',
    name: 'Earrings',
    tileQuery: 'editorial closeup of gold earrings on model warm light',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    tileQuery: 'editorial closeup of delicate gold necklace on woman neck warm light',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    tileQuery: 'gold huggie hoop earrings on model ear warm soft light',
  },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Amelia R.',
    quote:
      'These pieces feel far more expensive than they are. The huggies have not left my ears in six months — they survive showers, gym, everything.',
  },
  {
    id: 't2',
    name: 'Sophie L.',
    quote:
      'I gifted the Royal Heirloom Set to my sister and she cried. The packaging alone feels like a luxury boutique.',
  },
  {
    id: 't3',
    name: 'Marisol K.',
    quote:
      'Finally, demi-fine jewelry that does not look cheap on camera. The gold tone is warm and rich, exactly as photographed.',
  },
];

export const reels = [
  {
    id: 'reel-1',
    caption: 'The everyday huggie.',
    query: 'closeup vertical portrait of woman wearing small gold hoop huggie earrings warm light',
  },
  {
    id: 'reel-2',
    caption: 'Stacked, layered, loved.',
    query: 'vertical portrait of layered delicate gold necklaces on warm skin editorial',
  },
  {
    id: 'reel-3',
    caption: 'Catch the light.',
    query: 'vertical closeup of gold ear cuff with crystal on model warm side light',
  },
  {
    id: 'reel-4',
    caption: 'Made to be gifted.',
    query: 'vertical editorial of gold jewelry box with bow warm cream linen',
  },
  {
    id: 'reel-5',
    caption: 'Quiet golden hour.',
    query: 'vertical portrait of woman in beige knit wearing gold drop earrings warm sunset light',
  },
  {
    id: 'reel-6',
    caption: 'Heirloom in the making.',
    query: 'vertical closeup of gold filigree drop earring detail warm dark background',
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
