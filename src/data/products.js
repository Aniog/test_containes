// Seed catalog for Velmora Fine Jewelry.
// Each product has a unique `titleId` / `descId` so the data-strk-img system
// can reference its name/description when searching stock images.

export const CATEGORIES = [
  { id: "earrings", label: "Earrings" },
  { id: "necklaces", label: "Necklaces" },
  { id: "huggies", label: "Huggies" },
  { id: "sets", label: "Sets" },
]

export const MATERIALS = [
  { id: "18k-gold", label: "18K Gold Plated" },
  { id: "sterling-silver", label: "Sterling Silver" },
  { id: "gold-vermeil", label: "Gold Vermeil" },
]

export const PRODUCTS = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    category: "earrings",
    price: 42,
    compareAt: null,
    rating: 4.8,
    reviewCount: 312,
    badge: "Bestseller",
    titleId: "product-vivid-aura-title",
    descId: "product-vivid-aura-desc",
    short:
      "A single ear cuff traced with a hand-set crystal that catches the light with every turn.",
    description:
      "The Vivid Aura ear cuff is sculpted from recycled brass and plated in a thick layer of 18K gold, finished with a single handset crystal. Designed to wear on its own as a quiet statement, or stack with your everyday huggies for a more editorial feel.",
    materials:
      "18K gold plated recycled brass, handset crystal. Hypoallergenic and nickel-free.",
    care: "Store dry in the pouch provided. Avoid contact with perfume, lotion, and water. Wipe gently with the included polishing cloth to restore shine.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, full refund, no questions asked.",
    tones: ["gold", "silver"],
    images: [
      "vivid-aura-1",
      "vivid-aura-2",
      "vivid-aura-3",
      "vivid-aura-4",
    ],
    reelCaption: "Stacked in daylight",
  },
  {
    id: "majestic-flora-nectar",
    name: "Majestic Flora Nectar",
    category: "necklaces",
    price: 68,
    compareAt: null,
    rating: 4.9,
    reviewCount: 204,
    badge: "New",
    titleId: "product-flora-nectar-title",
    descId: "product-flora-nectar-desc",
    short:
      "A delicate floral pendant in muted crystal — a modern heirloom to wear close to the heart.",
    description:
      "A scattered cluster of warm-tone crystals arranged in an asymmetric floral silhouette. Hung on a fine 16–18 inch cable chain with a 2-inch extender, the Majestic Flora Nectar sits just below the collarbone.",
    materials:
      "18K gold plated brass, multicolor crystal. Hypoallergenic, lead-free, nickel-free.",
    care: "Remove before showering or sleeping. Keep dry. Wipe with a soft cloth after wear.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, full refund, no questions asked.",
    tones: ["gold"],
    images: [
      "flora-nectar-1",
      "flora-nectar-2",
      "flora-nectar-3",
      "flora-nectar-4",
    ],
    reelCaption: "Loved for layering",
  },
  {
    id: "golden-sphere-huggies",
    name: "Golden Sphere Huggies",
    category: "huggies",
    price: 38,
    compareAt: null,
    rating: 4.7,
    reviewCount: 481,
    badge: "Bestseller",
    titleId: "product-golden-sphere-title",
    descId: "product-golden-sphere-desc",
    short:
      "Sculpted golden domes with a satisfying weight — the everyday huggie, refined.",
    description:
      "A chunky dome huggie with a soft, hand-polished finish. The Golden Sphere is the piece you reach for: weighty enough to feel luxurious, small enough to live in. Hinged clicker closure for a secure, comfortable fit.",
    materials:
      "18K gold plated brass. Hypoallergenic, lead-free, nickel-free.",
    care: "Store in the Velmora pouch. Remove before swimming, bathing, and sleeping.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, full refund, no questions asked.",
    tones: ["gold", "silver"],
    images: [
      "golden-sphere-1",
      "golden-sphere-2",
      "golden-sphere-3",
      "golden-sphere-4",
    ],
    reelCaption: "Our most-loved huggie",
  },
  {
    id: "amber-lace-earrings",
    name: "Amber Lace Earrings",
    category: "earrings",
    price: 54,
    compareAt: null,
    rating: 4.8,
    reviewCount: 167,
    badge: null,
    titleId: "product-amber-lace-title",
    descId: "product-amber-lace-desc",
    short:
      "Filigree drop earrings with a hand-engraved lace pattern — weightless, antique-feeling.",
    description:
      "Each pair is cast from a hand-engraved brass master, then plated in 18K gold to bring out the depth of the lacework. Light on the ear, made to move. The Amber Lace reads as a quiet heirloom — the kind of piece you keep.",
    materials:
      "18K gold plated brass, hand-engraved. Hypoallergenic, lead-free, nickel-free.",
    care: "Avoid contact with water and perfume. Polish with the included cloth.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, full refund, no questions asked.",
    tones: ["gold"],
    images: [
      "amber-lace-1",
      "amber-lace-2",
      "amber-lace-3",
      "amber-lace-4",
    ],
    reelCaption: "Editorial, weightless",
  },
  {
    id: "royal-heirloom-set",
    name: "Royal Heirloom Set",
    category: "sets",
    price: 95,
    compareAt: 124,
    rating: 4.9,
    reviewCount: 92,
    badge: "Gift Edit",
    titleId: "product-royal-heirloom-title",
    descId: "product-royal-heirloom-desc",
    short:
      "A pair of Golden Sphere huggies and the Majestic Flora Nectar, gift-boxed together.",
    description:
      "Our two most-loved pieces, paired in a keepsake gift box. The Royal Heirloom Set is the answer to every anniversary, bridesmaid, and quiet 'thinking of you' — and it's priced as a set, not as two.",
    materials:
      "18K gold plated brass, handset crystal. Hypoallergenic, lead-free, nickel-free.",
    care: "Remove before water and sleep. Store in the gift box between wears.",
    shipping:
      "Free worldwide shipping on orders over $75. 30-day returns, full refund, no questions asked.",
    tones: ["gold"],
    images: [
      "royal-heirloom-1",
      "royal-heirloom-2",
      "royal-heirloom-3",
      "royal-heirloom-4",
    ],
    reelCaption: "Wrapped, ready, yours",
  },
]

// Editorial / supporting content used on the homepage. These are referenced by
// the data-strk-img system on the hero, brand story, and category tiles.
export const EDITORIAL = {
  hero: {
    titleId: "hero-title",
    subtitleId: "hero-subtitle",
    ctaId: "hero-cta",
  },
  brandStory: {
    titleId: "brand-story-title",
    bodyId: "brand-story-body",
  },
  categoryTiles: [
    { id: "earrings", label: "Earrings", titleId: "cat-earrings-label" },
    { id: "necklaces", label: "Necklaces", titleId: "cat-necklaces-label" },
    { id: "huggies", label: "Huggies", titleId: "cat-huggies-label" },
  ],
  testimonials: [
    {
      id: "t-amelia",
      name: "Amelia K.",
      quote:
        "The Golden Sphere huggies are the only pair I've worn every day for six months. They still look brand new.",
      rating: 5,
    },
    {
      id: "t-juliana",
      name: "Juliana P.",
      quote:
        "I bought the Royal Heirloom set for my sister. The packaging alone made her cry. The jewelry sealed it.",
      rating: 5,
    },
    {
      id: "t-naomi",
      name: "Naomi R.",
      quote:
        "Demi-fine that actually feels fine. Velmora is the first brand I trust to wear in the shower — but I still don't.",
      rating: 5,
    },
  ],
  reels: [
    { id: "r-1", caption: "Stacked in daylight", titleId: "reel-1-title" },
    { id: "r-2", caption: "Loved for layering", titleId: "reel-2-title" },
    { id: "r-3", caption: "Our most-loved huggie", titleId: "reel-3-title" },
    { id: "r-4", caption: "Editorial, weightless", titleId: "reel-4-title" },
    { id: "r-5", caption: "Wrapped, ready, yours", titleId: "reel-5-title" },
    { id: "r-6", caption: "A morning ritual", titleId: "reel-6-title" },
    { id: "r-7", caption: "Heirlooms in progress", titleId: "reel-7-title" },
    { id: "r-8", caption: "In the golden hour", titleId: "reel-8-title" },
  ],
}
