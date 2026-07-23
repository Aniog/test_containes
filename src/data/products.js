export const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    tagline: 'Gold ear cuff with crystal accent',
    price: 42,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 124,
    badge: 'Bestseller',
    description:
      'A sculptural ear cuff that hugs the ear in a sweep of warm gold, finished with a single hand-set crystal that catches the light with every movement. No piercing required — simply slide on and adjust for a comfortable, secure fit.',
    materials:
      'Crafted from a brass core plated in a thick layer of 18K gold (2.5 microns) over sterling silver accents. Hypoallergenic, nickel- and lead-free. To preserve the finish, avoid water, perfume and lotions, and store in the soft pouch provided. Gently polish with the included cloth.',
    giftBoxed: false,
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    tagline: 'Multicolor floral crystal necklace',
    price: 68,
    category: 'Necklaces',
    material: '18K Gold Plated',
    rating: 4.9,
    reviews: 86,
    badge: 'Limited',
    description:
      'Delicate blossoms of hand-set multicolor crystals gathered along a fine gold chain — a quiet statement that moves effortlessly from day to evening. Adjustable length lets it sit perfectly at the collarbone.',
    materials:
      'Brass core with 18K gold plating (2.5 microns) and precision-cut crystals. Hypoallergenic and nickel-free. Keep away from moisture and chemicals; wipe with a soft dry cloth after wear and store flat in the provided pouch.',
    giftBoxed: false,
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    tagline: 'Chunky gold dome huggie earrings',
    price: 38,
    category: 'Huggies',
    material: '18K Gold Plated',
    rating: 4.7,
    reviews: 203,
    badge: 'Bestseller',
    description:
      'Our signature dome huggies — a smooth, weightless curve of polished gold that hugs the lobe. Designed for everyday wear, from first coffee to last toast, they are the pair you will never take off.',
    materials:
      'Recycled brass core plated in 18K gold (2.5 microns) with a high-polish finish. Hypoallergenic posts, nickel- and lead-free. Remove before swimming or showering; polish gently with the care cloth to restore shine.',
    giftBoxed: false,
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    tagline: 'Textured gold filigree drop earrings',
    price: 54,
    category: 'Earrings',
    material: '18K Gold Plated',
    rating: 4.8,
    reviews: 97,
    badge: null,
    description:
      'Intricate filigree drops inspired by heirloom lace, cast in warm textured gold. Feather-light on the ear, they bring an old-world romance to modern silhouettes.',
    materials:
      'Hand-finished filigree in brass with 18K gold plating (2.5 microns). Hypoallergenic, nickel-free hooks. Store separately to protect the delicate lace work; avoid contact with water and fragrance.',
    giftBoxed: false,
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    tagline: 'Gift-boxed earring + necklace set',
    price: 95,
    category: 'Sets',
    material: '18K Gold Plated',
    rating: 5.0,
    reviews: 61,
    badge: 'Gift Set',
    description:
      'A perfectly paired earring and necklace set presented in our signature gift box — ready to give, impossible to forget. Classic gold silhouettes with a subtle crystal glint, made to be treasured for years.',
    materials:
      'Both pieces feature a brass core with 18K gold plating (2.5 microns) and hand-set crystals. Hypoallergenic and nickel-free. Arrives in the Velmora gift box with care cloth and pouch.',
    giftBoxed: true,
  },
];

export const categories = ['Earrings', 'Necklaces', 'Huggies', 'Sets'];

export const formatPrice = (value) => `$${value.toFixed(0)}`;

export const getProduct = (id) => products.find((p) => p.id === id);

export const getRelated = (id, count = 4) =>
  products.filter((p) => p.id !== id).slice(0, count);
