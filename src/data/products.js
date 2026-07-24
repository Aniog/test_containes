export const CATEGORIES = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

export const PRODUCTS = [
  {
    id: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    shortName: 'Vivid Aura',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 42,
    rating: 4.8,
    reviews: 126,
    badge: 'Bestseller',
    blurb: 'A sculptural gold ear cuff traced with a single row of light-catching crystals — no piercing required.',
    description:
      'The Vivid Aura cuff wraps the ear in a soft arc of 18k gold, finished with a delicate line of handset crystals that catch the light as you move. Designed to be worn alone as a quiet statement or layered with your favorite huggies, it slips on gently and stays comfortably in place from morning to midnight.',
    materials:
      'Crafted from a premium brass core, plated in a thick layer of 18k gold and sealed with an e-coating for lasting shine. Accented with AAA-grade cubic zirconia crystals. Nickel-free, lead-free and hypoallergenic. To care for your piece, avoid perfumes and harsh chemicals, wipe gently with a soft cloth after wear, and store in the Velmora pouch provided.',
    shipping:
      'Enjoy free worldwide shipping on every order, beautifully packaged in our signature gift box. Orders dispatch within 1–2 business days. We offer 30-day returns and exchanges — if your piece is not perfect, simply contact our care team and we will make it right.',
  },
  {
    id: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    shortName: 'Flora Nectar',
    category: 'necklaces',
    categoryLabel: 'Necklaces',
    price: 68,
    rating: 4.9,
    reviews: 89,
    badge: 'New',
    blurb: 'A golden bloom of multicolor crystals suspended from a whisper-fine 18k gold chain.',
    description:
      'Inspired by wildflower meadows at golden hour, the Flora Nectar necklace gathers hand-set crystals in soft honey, blush and champagne tones into a single radiant bloom. The pendant rests delicately at the collarbone on an adjustable 18k gold chain — an heirloom feeling, made for every day.',
    materials:
      'Premium brass core with a thick 18k gold plating, hand-set with multicolor AAA cubic zirconia. Chain adjusts from 16 to 18 inches with a signature Velmora clasp. Nickel-free, lead-free and hypoallergenic. Keep away from water and perfume, polish gently with the enclosed cloth, and store flat in your Velmora box.',
    shipping:
      'Enjoy free worldwide shipping on every order, beautifully packaged in our signature gift box. Orders dispatch within 1–2 business days. We offer 30-day returns and exchanges — if your piece is not perfect, simply contact our care team and we will make it right.',
  },
  {
    id: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    shortName: 'Golden Sphere',
    category: 'huggies',
    categoryLabel: 'Huggies',
    price: 38,
    rating: 4.7,
    reviews: 214,
    badge: 'Bestseller',
    blurb: 'Chunky domed huggies in molten 18k gold — the everyday pair you will never take off.',
    description:
      'Our Golden Sphere huggies are sculpted into a soft, rounded dome that hugs the earlobe like a drop of molten gold. Lightweight yet satisfyingly bold, they close with a secure hinged clasp and move effortlessly from workday to weekend. The pair our community reaches for most.',
    materials:
      'Premium brass core plated in a thick layer of 18k gold with a high-polish finish and protective e-coating. Hinged huggie closure, 12mm diameter. Nickel-free, lead-free and hypoallergenic — kind to sensitive ears. Wipe with a soft cloth after wear and store in the Velmora pouch provided.',
    shipping:
      'Enjoy free worldwide shipping on every order, beautifully packaged in our signature gift box. Orders dispatch within 1–2 business days. We offer 30-day returns and exchanges — if your piece is not perfect, simply contact our care team and we will make it right.',
  },
  {
    id: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    shortName: 'Amber Lace',
    category: 'earrings',
    categoryLabel: 'Earrings',
    price: 54,
    rating: 4.8,
    reviews: 67,
    badge: null,
    blurb: 'Textured filigree drops that fall like golden lace, warm as late-afternoon light.',
    description:
      'The Amber Lace earrings are hand-textured with an intricate filigree pattern inspired by vintage lace, finished in warm 18k gold. They sway gently as you move, catching light in soft amber flickers — romantic enough for evenings, refined enough for every day.',
    materials:
      'Premium brass core with a thick 18k gold plating, hand-finished filigree texture and protective e-coating. Secure butterfly-back posts, 32mm drop. Nickel-free, lead-free and hypoallergenic. Avoid moisture and perfume, and store in the Velmora box to protect the delicate texture.',
    shipping:
      'Enjoy free worldwide shipping on every order, beautifully packaged in our signature gift box. Orders dispatch within 1–2 business days. We offer 30-day returns and exchanges — if your piece is not perfect, simply contact our care team and we will make it right.',
  },
  {
    id: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    shortName: 'Royal Heirloom',
    category: 'sets',
    categoryLabel: 'Gift Sets',
    price: 95,
    rating: 5.0,
    reviews: 152,
    badge: 'Gift Ready',
    blurb: 'A gift-boxed pairing of crystal studs and a matching pendant — made to be given, kept, and treasured.',
    description:
      'The Royal Heirloom Set gathers our most-loved crystal studs and a matching pendant necklace into one signature Velmora gift box, tied with grosgrain ribbon. Each piece is finished in 18k gold and designed to be worn together or apart — a complete ritual of gifting, ready the moment it arrives.',
    materials:
      'Premium brass core plated in a thick layer of 18k gold with AAA cubic zirconia crystals, presented in a keepsake gift box with care cloth and pouch. Necklace adjusts 16–18 inches; stud posts are nickel-free, lead-free and hypoallergenic. Store pieces in the box to keep them pristine.',
    shipping:
      'Enjoy free worldwide shipping on every order, beautifully packaged in our signature gift box. Orders dispatch within 1–2 business days. We offer 30-day returns and exchanges — if your piece is not perfect, simply contact our care team and we will make it right.',
  },
]

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id)

export const formatPrice = (value) => `$${Number(value).toFixed(0)}`

export const FREE_SHIPPING_THRESHOLD = 75
