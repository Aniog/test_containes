export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    price: 42,
    category: 'earrings',
    material: 'gold-plated',
    tone: ['gold'],
    rating: 4.8,
    reviewCount: 124,
    bestseller: true,
    shortDescription: 'A sculptural gold ear cuff finished with a single luminous crystal accent. No piercing required.',
    description: 'The Vivid Aura Jewels ear cuff catches light at every angle. Hand-set crystal detail on a polished 18k gold-plated band creates an effortless statement — no piercing needed. Designed to sit comfortably on the ear and move with you.',
    materials: '18k gold-plated brass. Nickel-free, lead-free. Hand-set cubic zirconia accent.',
    care: 'Avoid contact with perfume, lotion, and water. Store in the provided pouch and polish with a soft cloth to maintain brilliance.',
    images: {
      gold: ['vivid-aura-1', 'vivid-aura-2'],
    },
    imgId: 'product-vivid-aura-main',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    price: 68,
    category: 'necklaces',
    material: 'gold-plated',
    tone: ['gold'],
    rating: 4.9,
    reviewCount: 86,
    bestseller: true,
    shortDescription: 'A delicate necklace with multicolor floral crystals clustered like a tiny bouquet.',
    description: 'Inspired by pressed wildflowers, the Majestic Flora Nectar necklace features a cluster of multicolor crystals arranged in a soft floral silhouette. Suspended on a fine gold-plated chain, it is the perfect finishing touch for day or evening.',
    materials: '18k gold-plated stainless steel chain. Hand-painted enamel and crystal pendant. Adjustable 16–18 inch length.',
    care: 'Gently wipe clean after wear. Keep dry and store flat to protect the delicate floral setting.',
    images: {
      gold: ['majestic-flora-1', 'majestic-flora-2'],
    },
    imgId: 'product-majestic-flora-main',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    price: 38,
    category: 'huggies',
    material: 'gold-plated',
    tone: ['gold', 'silver'],
    rating: 4.7,
    reviewCount: 203,
    bestseller: true,
    shortDescription: 'Chunky dome huggies with a mirror-polished finish for everyday luxury.',
    description: 'The Golden Sphere Huggies balance bold volume with a featherlight feel. The chunky dome silhouette is polished to a mirror finish, hugging the lobe with a secure click closure. Your new everyday signature.',
    materials: '18k gold-plated or rhodium-plated brass. Hypoallergenic stainless steel post.',
    care: 'Store separately to avoid scratches. Clean with a soft, dry cloth; avoid harsh chemicals.',
    images: {
      gold: ['golden-sphere-gold-1', 'golden-sphere-gold-2'],
      silver: ['golden-sphere-silver-1', 'golden-sphere-silver-2'],
    },
    imgId: 'product-golden-sphere-main',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    price: 54,
    category: 'earrings',
    material: 'gold-plated',
    tone: ['gold'],
    rating: 4.9,
    reviewCount: 71,
    bestseller: true,
    shortDescription: 'Textured gold filigree drop earrings with romantic, vintage-inspired detail.',
    description: 'Amber Lace Earrings combine intricate filigree texture with a modern drop shape. Each pair is cast in 18k gold-plated brass and finished by hand for a soft, heirloom glow.',
    materials: '18k gold-plated brass with hand-finished filigree texture. Stainless steel posts.',
    care: 'Keep away from moisture and perfumes. Store in a dry pouch and polish gently with a soft cloth.',
    images: {
      gold: ['amber-lace-1', 'amber-lace-2'],
    },
    imgId: 'product-amber-lace-main',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    price: 95,
    category: 'sets',
    material: 'gold-plated',
    tone: ['gold'],
    rating: 5.0,
    reviewCount: 42,
    bestseller: true,
    shortDescription: 'A gift-ready pairing of signature earrings and matching necklace in a velvet box.',
    description: 'The Royal Heirloom Set is our most loved gift. A pair of polished drop earrings and a matching pendant necklace arrive in a soft velvet box, ready for giving. A complete look at an irresistible value.',
    materials: '18k gold-plated brass earrings and necklace. Nickel-free, lead-free. Includes Velmora gift box.',
    care: 'Store in the included box. Wipe clean with a soft cloth and avoid exposure to water.',
    images: {
      gold: ['royal-heirloom-1', 'royal-heirloom-2'],
    },
    imgId: 'product-royal-heirloom-main',
  },
]

export const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const getRelatedProducts = (currentId, limit = 4) =>
  products.filter((p) => p.id !== currentId).slice(0, limit)

export const getBestsellers = () => products.filter((p) => p.bestseller)
