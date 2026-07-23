const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'Earrings',
    type: 'Ear Cuffs',
    material: '18K Gold Plated',
    rating: 4.8,
    reviewCount: 124,
    bestsellerImgId: 'bestseller-vivid-aura-jewels',
    cartImgId: 'cart-vivid-aura-jewels',
    shopImgId: 'shop-vivid-aura-jewels',
    relatedImgId: 'related-vivid-aura-jewels',
    description:
      'A sculptural gold ear cuff adorned with a single luminous crystal accent. Designed to hug the ear with effortless elegance — no piercing required. The open silhouette catches light with every turn.',
    details:
      'Lightweight ear cuff crafted from 18K gold-plated brass with a bezel-set cubic zirconia crystal. Each piece is hand-polished for a radiant finish. Sold as a single.',
    care: 'To preserve the brilliance, avoid contact with water, perfume, and lotions. Store in the provided velvet pouch. Gently clean with a soft, dry cloth.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'vivid-aura-1', query: '[vivid-aura-desc] [vivid-aura-name] gold ear cuff crystal', ratio: '1x1', width: 800 },
      { id: 'vivid-aura-2', query: '[vivid-aura-desc] [vivid-aura-name] gold ear cuff detail', ratio: '1x1', width: 800 },
      { id: 'vivid-aura-3', query: '[vivid-aura-desc] [vivid-aura-name] ear cuff on model', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'Necklaces',
    type: 'Pendant Necklace',
    material: '18K Gold Plated',
    rating: 4.9,
    reviewCount: 87,
    bestsellerImgId: 'bestseller-majestic-flora-nectar',
    cartImgId: 'cart-majestic-flora-nectar',
    shopImgId: 'shop-majestic-flora-nectar',
    relatedImgId: 'related-majestic-flora-nectar',
    description:
      'A delicate gold chain suspending a radiant floral pendant with multicolor crystal accents. Each petal catches the light differently, creating a subtle prismatic shimmer across the collarbone.',
    details:
      'Adjustable 16–18 inch chain crafted from 18K gold-plated brass. The pendant features hand-set crystals in amber, rose, and clear tones. Secure lobster clasp with Velmora logo tag.',
    care: 'Avoid contact with water, perfume, and harsh chemicals. Wipe gently with a soft cloth after wearing. Store flat in a jewelry box or pouch.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'flora-1', query: '[flora-desc] [flora-name] floral crystal gold necklace', ratio: '1x1', width: 800 },
      { id: 'flora-2', query: '[flora-desc] [flora-name] multicolor crystal pendant detail', ratio: '1x1', width: 800 },
      { id: 'flora-3', query: '[flora-desc] [flora-name] floral necklace on model', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'Huggies',
    type: 'Huggie Earrings',
    material: '18K Gold Plated',
    rating: 4.7,
    reviewCount: 203,
    bestsellerImgId: 'bestseller-golden-sphere-huggies',
    cartImgId: 'cart-golden-sphere-huggies',
    shopImgId: 'shop-golden-sphere-huggies',
    relatedImgId: 'related-golden-sphere-huggies',
    description:
      'Chunky gold dome huggie earrings with a smooth, sculptural silhouette. The perfect everyday statement — substantial enough to wear alone, refined enough to stack with studs.',
    details:
      'Sold as a pair. 12mm diameter, crafted from 18K gold-plated brass with a high-polish finish. Hinged closure for easy wear. Hypoallergenic posts.',
    care: 'Remove before showering or swimming. Avoid contact with lotions and perfumes. Clean with a soft, dry cloth. Store in the provided pouch.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'sphere-1', query: '[sphere-desc] [sphere-name] chunky gold dome huggie earrings', ratio: '1x1', width: 800 },
      { id: 'sphere-2', query: '[sphere-desc] [sphere-name] gold huggies detail', ratio: '1x1', width: 800 },
      { id: 'sphere-3', query: '[sphere-desc] [sphere-name] huggie earrings on model', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'Earrings',
    type: 'Drop Earrings',
    material: '18K Gold Plated',
    rating: 4.6,
    reviewCount: 61,
    bestsellerImgId: 'bestseller-amber-lace-earrings',
    cartImgId: 'cart-amber-lace-earrings',
    shopImgId: 'shop-amber-lace-earrings',
    relatedImgId: 'related-amber-lace-earrings',
    description:
      'Intricate filigree drop earrings with a warm amber-toned crystal center. The open lacework design in gold creates a vintage-meets-modern silhouette that sways delicately with movement.',
    details:
      '1.5 inch drop. 18K gold-plated brass with hand-finished filigree detailing. Amber-tone glass crystal center. French hook backs. Sold as a pair.',
    care: 'Handle with care — the filigree is delicate. Avoid water, perfume, and rough surfaces. Gently wipe with a dry cloth. Store hanging or flat.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'lace-1', query: '[lace-desc] [lace-name] gold filigree drop earrings amber', ratio: '1x1', width: 800 },
      { id: 'lace-2', query: '[lace-desc] [lace-name] textured gold filigree detail', ratio: '1x1', width: 800 },
      { id: 'lace-3', query: '[lace-desc] [lace-name] amber drop earrings on model', ratio: '3x4', width: 800 },
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'Sets',
    type: 'Earring & Necklace Set',
    material: '18K Gold Plated',
    rating: 5.0,
    reviewCount: 42,
    bestsellerImgId: 'bestseller-royal-heirloom-set',
    cartImgId: 'cart-royal-heirloom-set',
    shopImgId: 'shop-royal-heirloom-set',
    relatedImgId: 'related-royal-heirloom-set',
    description:
      'A coordinated earring and necklace set presented in our signature gift box — the ultimate gifting piece. Features a crystal-accented pendant necklace with matching stud earrings, both in warm gold.',
    details:
      'Set includes: pendant necklace (16–18 inch adjustable) with teardrop crystal and matching round crystal stud earrings. 18K gold-plated brass. Arrives in Velmora signature gift box with ribbon.',
    care: 'Avoid contact with water, perfume, and lotions. Clean with a soft, dry cloth. Store each piece separately. Gift box suitable for long-term storage.',
    shipping: 'Free worldwide shipping on all orders. Estimated delivery: 5–10 business days. 30-day hassle-free returns.',
    variants: ['Gold', 'Silver'],
    images: [
      { id: 'heirloom-1', query: '[heirloom-desc] [heirloom-name] gift box earring necklace gold set', ratio: '1x1', width: 800 },
      { id: 'heirloom-2', query: '[heirloom-desc] [heirloom-name] crystal jewelry set detail', ratio: '1x1', width: 800 },
      { id: 'heirloom-3', query: '[heirloom-desc] [heirloom-name] gift set packaging', ratio: '1x1', width: 800 },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sofia M.',
    rating: 5,
    text: 'Absolutely stunning. The Golden Sphere Huggies are my new everyday staple — they feel weightless and look so much more expensive than they are.',
  },
  {
    id: 2,
    name: 'Claire D.',
    rating: 5,
    text: 'Ordered the Royal Heirloom Set for my sister\'s birthday. The packaging alone made her cry. The jewelry is exquisite — the crystals sparkle beautifully in daylight.',
  },
  {
    id: 3,
    name: 'Lena K.',
    rating: 5,
    text: 'I\'ve been searching for demi-fine pieces that don\'t feel cheap. Velmora delivers. The weight, the finish, the details — everything feels considered and premium.',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    desc: 'Sculptural studs, drops & cuffs',
    imgQuery: 'gold earrings editorial warm lighting',
    slug: 'earrings',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    desc: 'Delicate chains & statement pendants',
    imgQuery: 'gold necklace editorial warm lighting',
    slug: 'necklaces',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    desc: 'Everyday gold hoops & huggies',
    imgQuery: 'gold huggie earrings editorial warm lighting',
    slug: 'huggies',
  },
];

export const ugcItems = [
  {
    id: 1,
    handle: '@moniquestyle',
    caption: 'Golden hour with my Amber Lace drops',
    imgQuery: 'woman wearing gold drop earrings warm lighting editorial',
  },
  {
    id: 2,
    handle: '@julesandco',
    caption: 'Stacked huggies. Every. Single. Day.',
    imgQuery: 'woman wearing layered gold huggie earrings close up',
  },
  {
    id: 3,
    handle: '@carolinejewel',
    caption: 'Majestic Flora Nectar — even prettier in person',
    imgQuery: 'woman wearing crystal floral necklace warm tone',
  },
  {
    id: 4,
    handle: '@thestylistdiary',
    caption: 'The perfect gift. Royal Heirloom Set unboxing',
    imgQuery: 'gold jewelry gift set unboxing warm aesthetic',
  },
  {
    id: 5,
    handle: '@everydaygold',
    caption: 'Vivid Aura — the ear cuff I never take off',
    imgQuery: 'woman wearing gold ear cuff editorial close up',
  },
];

export default products;
