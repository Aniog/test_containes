// Seed product catalog for Velmora Fine Jewelry.
// Image ids are used by the data-strk-img runtime; queries reference nearby text via IDs.

export const CATEGORIES = [
  { id: "earrings", name: "Earrings" },
  { id: "necklaces", name: "Necklaces" },
  { id: "huggies", name: "Huggies" },
  { id: "sets", name: "Sets" },
];

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "rose-gold", label: "Rose Gold" },
];

export const PRODUCTS = [
  {
    id: "vivid-aura-cuff",
    name: "Vivid Aura Jewels",
    tagline: "Crystal gold ear cuff",
    category: "earrings",
    material: "18k-gold",
    price: 42,
    rating: 4.9,
    reviews: 128,
    description:
      "A single, sculptural ear cuff set with a hand-set crystal. Designed to wear solo or stacked across the ear — the kind of piece you forget you have on until the light catches it.",
    details: [
      "18K gold plated over a brass core",
      "Hypoallergenic, nickel-free",
      "Single cuff, no piercing required",
      "Hand-set crystal accent",
    ],
    materials:
      "18K gold plating over a hypoallergenic brass core. Designed for daily wear; remove before swimming or showering to preserve the finish. Store in the suede pouch provided.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn items in original packaging. Orders ship within 1–2 business days from our studio in Lisbon.",
    images: [
      {
        id: "vivid-aura-primary-1",
        queryRef: "vivid-aura-name vivid-aura-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "vivid-aura-secondary-1",
        queryRef: "vivid-aura-name vivid-aura-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "vivid-aura-3",
        queryRef: "vivid-aura-name vivid-aura-tagline",
        ratio: "1x1",
        width: 600,
      },
    ],
    badge: "Bestseller",
    variants: ["Gold"],
  },
  {
    id: "majestic-flora-necklace",
    name: "Majestic Flora Nectar",
    tagline: "Multicolor floral crystal necklace",
    category: "necklaces",
    material: "18k-gold",
    price: 68,
    rating: 4.8,
    reviews: 86,
    description:
      "A delicate cluster of multicolour crystals set in a floral silhouette, suspended from a fine cable chain. The piece is finished by hand in our atelier and made to layer with a huggie or a single stud.",
    details: [
      "Multicolor crystal cluster",
      "Adjustable 16–18 inch chain",
      "Lobster clasp closure",
      "18K gold plated",
    ],
    materials:
      "Hand-set crystals on an 18K gold plated brass base. Wipe gently with the included polishing cloth. Avoid direct contact with perfume and lotions.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn items in original packaging. Express options available at checkout.",
    images: [
      {
        id: "majestic-flora-primary-1",
        queryRef: "majestic-flora-name majestic-flora-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "majestic-flora-secondary-1",
        queryRef: "majestic-flora-name majestic-flora-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "majestic-flora-3",
        queryRef: "majestic-flora-name majestic-flora-tagline",
        ratio: "1x1",
        width: 600,
      },
    ],
    badge: "New In",
    variants: ["Gold", "Silver"],
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    tagline: "Chunky gold dome huggies",
    category: "huggies",
    material: "18k-gold",
    price: 38,
    rating: 4.9,
    reviews: 214,
    description:
      "Our chunky dome huggies — weighty, polished and quietly architectural. They sit close to the lobe and catch the light without trying. A foundation piece, sold as a pair.",
    details: [
      "Chunky dome silhouette",
      "Hinged snap closure",
      "18K gold plated",
      "Sold as a pair",
    ],
    materials:
      "Solid-feel 18K gold plating over brass. Hypoallergenic and nickel-free. Remove before showering and store flat in the suede pouch.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn items in original packaging. Express options available at checkout.",
    images: [
      {
        id: "golden-sphere-primary-1",
        queryRef: "golden-sphere-name golden-sphere-tagline",
        ratio: "1x1",
        width: 900,
      },
      {
        id: "golden-sphere-secondary-1",
        queryRef: "golden-sphere-name golden-sphere-tagline",
        ratio: "1x1",
        width: 900,
      },
      {
        id: "golden-sphere-3",
        queryRef: "golden-sphere-name golden-sphere-tagline",
        ratio: "1x1",
        width: 600,
      },
    ],
    badge: "Bestseller",
    variants: ["Gold", "Silver"],
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    tagline: "Textured gold filigree drops",
    category: "earrings",
    material: "18k-gold",
    price: 54,
    rating: 4.7,
    reviews: 73,
    description:
      "An open lace of gold filigree, light enough to wear all day, detailed enough to feel like an heirloom. Designed to move with you.",
    details: [
      "Filigree drop silhouette",
      "Lightweight, all-day wear",
      "Push-back post closure",
      "18K gold plated",
    ],
    materials:
      "18K gold plated brass with a hand-finished filigree texture. Wipe with a soft cloth after wear and store in the suede pouch to prevent tarnish.",
    shipping:
      "Free worldwide shipping on orders over $80. 30-day returns on unworn items in original packaging. Express options available at checkout.",
    images: [
      {
        id: "amber-lace-primary-1",
        queryRef: "amber-lace-name amber-lace-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "amber-lace-secondary-1",
        queryRef: "amber-lace-name amber-lace-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "amber-lace-3",
        queryRef: "amber-lace-name amber-lace-tagline",
        ratio: "1x1",
        width: 600,
      },
    ],
    badge: "Limited",
    variants: ["Gold"],
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    tagline: "Earring and necklace gift set",
    category: "sets",
    material: "18k-gold",
    price: 95,
    rating: 5.0,
    reviews: 41,
    description:
      "A matched earring and necklace set, presented in a keepsake gift box with a hand-tied ribbon. The piece most often chosen for someone you love — and occasionally, beautifully, for yourself.",
    details: [
      "Earring and necklace pair",
      "18K gold plated",
      "Keepsake gift box included",
      "Hypoallergenic",
    ],
    materials:
      "18K gold plated brass, hypoallergenic and nickel-free. Designed to last; treat as you would fine jewelry — remove before sleeping, showering or swimming.",
    shipping:
      "Complimentary worldwide shipping on this set. 30-day returns on unworn items in original packaging. Gift notes available at checkout.",
    images: [
      {
        id: "royal-heirloom-primary-1",
        queryRef: "royal-heirloom-name royal-heirloom-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "royal-heirloom-secondary-1",
        queryRef: "royal-heirloom-name royal-heirloom-tagline",
        ratio: "3x2",
        width: 900,
      },
      {
        id: "royal-heirloom-3",
        queryRef: "royal-heirloom-name royal-heirloom-tagline",
        ratio: "1x1",
        width: 600,
      },
    ],
    badge: "Gift Ready",
    variants: ["Gold", "Silver"],
  },
];

export const formatPrice = (n) => `$${n.toFixed(n % 1 === 0 ? 0 : 2)}`;

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id) || null;

export const getRelatedProducts = (id, count = 4) => {
  const current = getProductById(id);
  if (!current) return PRODUCTS.slice(0, count);
  return PRODUCTS.filter((p) => p.id !== id).slice(0, count);
};
