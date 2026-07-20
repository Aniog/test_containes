export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    tone: 'gold',
    rating: 4.8,
    reviews: 124,
    description:
      'A sculptural gold ear cuff with a delicate crystal accent. Designed to sit comfortably on the ear without piercing, the Vivid Aura Jewels catch light with every movement.',
    details:
      '18K gold-plated brass. Swarovski crystal accent. Nickel-free and hypoallergenic. One size fits most.',
    care: 'Avoid contact with water, perfumes, and lotions. Store in the provided pouch. Clean with a soft, dry cloth.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery: 5–10 business days. Express delivery: 2–4 business days.',
    images: 3,
    bestseller: true,
    related: ['amber-lace-earrings', 'golden-sphere-huggies'],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    tone: 'gold',
    rating: 4.9,
    reviews: 89,
    description:
      'A statement necklace featuring hand-set multicolor floral crystals on a delicate gold chain. The Majestic Flora Nectar transforms any neckline into a garden of light.',
    details:
      '18K gold-plated brass chain. Hand-set glass crystals in pastel tones. Adjustable length: 16–18 inches. Lobster clasp closure.',
    care: 'Lay flat to store. Avoid moisture and chemicals. Wipe gently after wear.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery: 5–10 business days. Express delivery: 2–4 business days.',
    images: 3,
    bestseller: true,
    related: ['royal-heirloom-set', 'vivid-aura-jewels'],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    tone: 'gold',
    rating: 4.7,
    reviews: 215,
    description:
      'Chunky dome huggie earrings with a mirror-polish finish. The Golden Sphere Huggies offer bold volume in a petite, everyday-friendly silhouette.',
    details:
      '18K gold-plated brass. Hinge closure for easy wear. Diameter: 12mm. Weight: 3g per earring.',
    care: 'Store separately to avoid scratches. Clean with a soft cloth. Keep away from water and sprays.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery: 5–10 business days. Express delivery: 2–4 business days.',
    images: 3,
    bestseller: true,
    related: ['vivid-aura-jewels', 'amber-lace-earrings'],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    tone: 'gold',
    rating: 4.6,
    reviews: 76,
    description:
      'Textured gold filigree drop earrings inspired by vintage lace patterns. The Amber Lace Earrings bring romantic drama to evening looks and refined polish to daytime dressing.',
    details:
      '18K gold-plated brass with hand-textured filigree. Drop length: 45mm. Fishhook closure. Lightweight construction.',
    care: 'Handle with care to preserve delicate filigree detail. Store in provided box. Avoid moisture.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery: 5–10 business days. Express delivery: 2–4 business days.',
    images: 3,
    bestseller: true,
    related: ['majestic-flora-nectar', 'royal-heirloom-set'],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    tone: 'gold',
    rating: 5.0,
    reviews: 42,
    description:
      'A curated gift set featuring a pair of signature earrings and a matching pendant necklace, presented in a Velmora gift box. The Royal Heirloom Set is gifting, perfected.',
    details:
      'Includes: one pair of stud earrings and one pendant necklace. 18K gold-plated brass. Necklace length: 18 inches. Gift box included.',
    care: 'Store in gift box when not in use. Clean with soft cloth. Avoid contact with water and perfumes.',
    shipping:
      'Free worldwide shipping on orders over $50. Standard delivery: 5–10 business days. Express delivery: 2–4 business days.',
    images: 3,
    bestseller: true,
    related: ['majestic-flora-nectar', 'golden-sphere-huggies'],
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);

export const getRelatedProducts = (product) => {
  if (!product?.related) return [];
  return product.related.map((id) => getProductById(id)).filter(Boolean);
};

export const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    rating: 5,
    text: 'The quality exceeded my expectations. These pieces look far more expensive than they are. I have received compliments every time I wear them.',
  },
  {
    id: 2,
    name: 'Emma R.',
    rating: 5,
    text: 'Bought the Royal Heirloom Set as a birthday gift for my sister. The packaging alone made it feel so special. She absolutely loved it.',
  },
  {
    id: 3,
    name: 'Olivia K.',
    rating: 5,
    text: 'I have sensitive ears and usually cannot wear fashion jewelry. Velmora pieces are genuinely hypoallergenic. Finally, I can accessorize without irritation.',
  },
];

export const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    imageQuery: 'gold earrings jewelry editorial closeup',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imageQuery: 'gold necklace jewelry editorial closeup',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imageQuery: 'gold huggie hoop earrings jewelry editorial',
  },
];

export const ugcItems = [
  {
    id: 1,
    caption: 'Everyday luxury',
    imageQuery: 'woman wearing gold hoop earrings closeup ear editorial',
  },
  {
    id: 2,
    caption: 'Layered elegance',
    imageQuery: 'woman gold layered necklaces neck closeup editorial',
  },
  {
    id: 3,
    caption: 'Gift-worthy',
    imageQuery: 'gold jewelry gift box packaging elegant',
  },
  {
    id: 4,
    caption: 'Effortless shine',
    imageQuery: 'woman wearing gold ear cuff ear closeup editorial',
  },
  {
    id: 5,
    caption: 'Evening glamour',
    imageQuery: 'woman gold drop earrings portrait editorial warm light',
  },
];
