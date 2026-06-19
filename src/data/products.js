export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    slug: 'vivid-aura-jewels',
    price: 42,
    category: 'earrings',
    material: 'gold',
    rating: 4.8,
    reviewCount: 124,
    description: 'A sculptural gold ear cuff designed to catch the light at every angle. Featuring a luminous crystal accent nestled within polished 18K gold plating. Designed for comfort and statement-making elegance — no piercing required.',
    materials: '18K gold-plated brass. Crystal accent. Nickel-free and hypoallergenic. Waterproof coating.',
    care: 'Avoid contact with perfumes and harsh chemicals. Clean gently with a soft cloth. Store in provided pouch when not in use.',
    image: 'gold ear cuff crystal accent elegant jewelry on model ear',
    hoverImage: 'gold ear cuff crystal closeup jewelry photography',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    slug: 'majestic-flora-nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold',
    rating: 4.9,
    reviewCount: 89,
    description: 'A delicate garden of multicolor crystal blossoms strung along a fine gold chain. Each petal is handset for a radiant, heirloom-quality finish that transitions effortlessly from day to evening.',
    materials: '18K gold-plated chain. Handset multicolor crystals. Adjustable 16–18 inch length. Lobster clasp closure.',
    care: 'Handle with care to protect crystal settings. Store flat to prevent tangling. Wipe clean with a dry cloth only.',
    image: 'multicolor floral crystal necklace gold chain elegant jewelry',
    hoverImage: 'floral crystal necklace closeup gold jewelry detail',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    slug: 'golden-sphere-huggies',
    price: 38,
    category: 'huggies',
    material: 'gold',
    rating: 4.7,
    reviewCount: 215,
    description: 'Chunky yet impossibly lightweight, these dome huggies bring modern sculptural presence to an everyday staple. The smooth convex surface mirrors light beautifully for a subtle golden glow.',
    materials: '18K gold-plated brass. Hinged huggie closure. 12mm diameter. Hollow construction for all-day comfort.',
    care: 'Avoid sleeping or showering with your huggies. Clean with a jewelry cloth to maintain shine.',
    image: 'chunky gold dome huggie earrings jewelry photography',
    hoverImage: 'gold sphere huggies worn on ear elegant closeup',
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    slug: 'amber-lace-earrings',
    price: 54,
    category: 'earrings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 76,
    description: 'Intricate filigree drops inspired by vintage lacework, reimagined in warm gold with a contemporary silhouette. Textured and refined — these are the earrings that start conversations.',
    materials: '18K gold-plated brass. Filigree texture. Post and butterfly backing. 45mm drop length.',
    care: 'Store hanging or flat to preserve shape. Clean gently; do not use ultrasonic cleaners.',
    image: 'textured gold filigree drop earrings elegant jewelry',
    hoverImage: 'gold filigree earrings worn on model jewelry photography',
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    slug: 'royal-heirloom-set',
    price: 95,
    category: 'sets',
    material: 'gold',
    rating: 5.0,
    reviewCount: 52,
    description: 'A curated gift set of our most-loved stud earrings and a matching pendant necklace, presented in a signature Velmora gift box. The ultimate gesture — for someone you treasure, or yourself.',
    materials: '18K gold-plated brass earrings and necklace. Gift box with velvet insert. Necklace: 16–18 inch adjustable.',
    care: 'Store pieces separately in the gift box pouch to prevent scratching. Wipe clean with a soft cloth.',
    image: 'gold jewelry gift set earrings necklace velvet box elegant',
    hoverImage: 'gold stud earrings pendant necklace set jewelry flatlay',
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);

export const getRelatedProducts = (currentSlug, limit = 4) => {
  return products
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
};

export const testimonials = [
  {
    id: 1,
    name: 'Elise M.',
    rating: 5,
    text: 'The quality exceeded my expectations. My Golden Sphere Huggies have become my everyday staple — they feel so luxe for the price.',
  },
  {
    id: 2,
    name: 'Samantha T.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift and she absolutely loved it. The packaging alone felt like a luxury brand.',
  },
  {
    id: 3,
    name: 'Victoria R.',
    rating: 5,
    text: 'Quiet luxury at its finest. The Amber Lace Earrings are delicate, eye-catching, and I receive compliments every time I wear them.',
  },
];

export const ugcItems = [
  { id: 1, caption: 'Everyday gold', image: 'woman wearing gold huggie earrings closeup ear' },
  { id: 2, caption: 'Date night ready', image: 'gold necklace on woman neck elegant jewelry portrait' },
  { id: 3, caption: 'Self-gift moment', image: 'woman opening jewelry gift box gold earrings' },
  { id: 4, caption: 'Stacked & styled', image: 'gold earrings stacked on ear multiple huggies' },
  { id: 5, caption: 'Morning light', image: 'gold jewelry on marble surface sunlight aesthetic' },
  { id: 6, caption: 'Treasured', image: 'woman touching gold necklace closeup portrait warm' },
];
