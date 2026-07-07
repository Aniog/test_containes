// Seed product catalogue for Velmora Fine Jewelry.
// Image IDs are unique per slot and consumed by the strk-img system.

export const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'Earrings',
    type: 'Ear Cuff',
    price: 42,
    rating: 4.8,
    reviews: 126,
    tone: 'Gold',
    shortDescription:
      'A sculptural gold ear cuff crowned with a single crystal accent — effortless statement, no piercing required.',
    description:
      'The Vivid Aura ear cuff is engineered to hug the cartilage with a gentle, adjustable tension, finished in 18K gold plating over sterling silver. A hand-set crystal catches the light at every angle, making it the kind of piece that elevates a simple bun or a bare shoulder alike.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hand-set cubic zirconia crystal.',
    care: 'Avoid contact with perfumes and water. Store in the provided pouch. Polish with a soft microfibre cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-vivid-aura-a1b2',
    imgId2: 'p-vivid-aura-alt-c3d4',
    galleryIds: [
      'p-vivid-aura-alt-c3d4',
    ],
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'Necklaces',
    type: 'Pendant Necklace',
    price: 68,
    rating: 4.9,
    reviews: 203,
    tone: 'Gold',
    shortDescription:
      'A multicolor floral crystal pendant suspended from a delicate gold chain — a garden in miniature.',
    description:
      'Majestic Flora Nectar gathers hand-set crystals into a blooming floral motif, each petal a different warm hue. The pendant floats on a fine 18K gold-plated chain that adjusts to two lengths, layering beautifully with simpler pieces or standing alone as the focal point of an evening look.',
    materials:
      '18K gold plating over brass base. Multicolor cubic zirconia crystals. Adjustable 40–45cm chain with lobster clasp.',
    care: 'Keep dry and away from cosmetics. Store flat in the gift box. Clean gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-majestic-flora-a1b2',
    imgId2: 'p-majestic-flora-alt-c3d4',
    galleryIds: [
      'p-majestic-flora-alt-c3d4',
    ],
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'Huggies',
    type: 'Huggie Earrings',
    price: 38,
    rating: 4.7,
    reviews: 318,
    tone: 'Gold',
    shortDescription:
      'Chunky gold dome huggies with a smooth, sculpted finish — everyday luxury that never feels ordinary.',
    description:
      'The Golden Sphere huggies reimagine the classic hoop as a polished dome that sits flush against the lobe. Their satisfying weight and rounded silhouette make them the most-reached-for pair in any jewellery box, equally at home with a white tee or a silk slip.',
    materials:
      '18K gold plating over 925 sterling silver. Hypoallergenic, nickel-free. Hinged snap closure.',
    care: 'Wipe clean after each wear. Avoid water and perfume. Store in a dry pouch.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-golden-sphere-a1b2',
    imgId2: 'p-golden-sphere-alt-c3d4',
    galleryIds: [
      'p-golden-sphere-alt-c3d4',
    ],
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'Earrings',
    type: 'Drop Earrings',
    price: 54,
    rating: 4.8,
    reviews: 97,
    tone: 'Gold',
    shortDescription:
      'Textured gold filigree drop earrings with an openwork lace pattern — heirloom craft, modern weight.',
    description:
      'Amber Lace is drawn by hand and rendered in textured gold filigree, each openwork panel catching shadow and light. The drops move with a quiet sway, framing the face without overwhelming it — a piece that reads as both antique and entirely now.',
    materials:
      '18K gold plating over brass. Textured filigree openwork. Lightweight post-back closure.',
    care: 'Handle with care to preserve the filigree. Store flat. Polish gently with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Dispatched within 24 hours. 30-day returns, no questions asked.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-amber-lace-a1b2',
    imgId2: 'p-amber-lace-alt-c3d4',
    galleryIds: [
      'p-amber-lace-alt-c3d4',
    ],
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'Necklaces',
    type: 'Earring + Necklace Set',
    price: 95,
    rating: 5.0,
    reviews: 64,
    tone: 'Gold',
    shortDescription:
      'A gift-boxed earring and necklace set, designed to be worn together or treasured apart.',
    description:
      'The Royal Heirloom Set pairs a crystal-accented pendant necklace with matching drop earrings, presented in a keepsake gift box. Coordinated in proportion and finish, the set is the effortless answer to gifting — or to treating yourself to something that feels complete.',
    materials:
      '18K gold plating over 925 sterling silver. Hand-set cubic zirconia. Includes necklace and earrings.',
    care: 'Store each piece in the gift box compartments. Keep dry. Polish with a soft cloth.',
    shipping:
      'Free worldwide shipping on all orders. Gift-boxed and ready. Dispatched within 24 hours. 30-day returns.',
    variants: ['Gold', 'Silver'],
    imgId: 'p-royal-heirloom-a1b2',
    imgId2: 'p-royal-heirloom-alt-c3d4',
    galleryIds: [
      'p-royal-heirloom-alt-c3d4',
    ],
  },
]

export const categories = [
  {
    id: 'Earrings',
    name: 'Earrings',
    description: 'Ear cuffs, drops & huggies',
    imgId: 'cat-earrings-7f2a',
  },
  {
    id: 'Necklaces',
    name: 'Necklaces',
    description: 'Pendants & layered chains',
    imgId: 'cat-necklaces-3b9c',
  },
  {
    id: 'Huggies',
    name: 'Huggies',
    description: 'Sculpted dome hoops',
    imgId: 'cat-huggies-5d1e',
  },
]

export const testimonials = [
  {
    name: 'Eleanor M.',
    rating: 5,
    text: 'The gold plating is genuinely beautiful — I get compliments every time I wear the Flora Nectar. It feels far more expensive than it was.',
  },
  {
    name: 'Priya S.',
    rating: 5,
    text: 'Bought the Heirloom Set as a gift and the box alone made it feel special. My sister hasn’t taken the earrings off since.',
  },
  {
    name: 'Camille R.',
    rating: 5,
    text: 'I have sensitive ears and these are the first huggies I can wear all day. Lightweight, elegant, and they don’t tarnish.',
  },
]

export const reels = [
  {
    id: 'reel-1',
    caption: 'Golden Sphere huggies, everyday',
    imgId: 'reel-huggies-1a2b',
  },
  {
    id: 'reel-2',
    caption: 'Flora Nectar layered up',
    imgId: 'reel-flora-3c4d',
  },
  {
    id: 'reel-3',
    caption: 'Vivid Aura ear cuff stack',
    imgId: 'reel-cuff-5e6f',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace for date night',
    imgId: 'reel-lace-7g8h',
  },
  {
    id: 'reel-5',
    caption: 'The Heirloom Set, unboxed',
    imgId: 'reel-heirloom-9i0j',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, limit = 4) {
  return products.filter((p) => p.id !== id).slice(0, limit)
}
